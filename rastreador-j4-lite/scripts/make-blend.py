"""Monta o arquivo editável do Blender a partir do GLB.

    python-com-bpy scripts/make-blend.py modelo/j4_lite.glb modelo/j4_lite.blend
    (ou: blender -b -P scripts/make-blend.py -- modelo/j4_lite.glb modelo/j4_lite.blend)

- uma coleção por conjunto (01 a 06), com os subobjetos dentro;
- marcadores MONTADO e EXPLODIDO na linha do tempo;
- keyframes da desmontagem (quadros 1–97) e da montagem (121–217), na ordem pedida;
- câmera e luzes de estúdio para renderizar direto.
"""
import os
import sys
import math
import bpy
from mathutils import Vector

argv = sys.argv
if '--' in argv:
    argv = argv[argv.index('--') + 1:]
glb, out = argv[-2], argv[-1]

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.context.preferences.filepaths.save_version = 0  # sem cópia .blend1
bpy.ops.import_scene.gltf(filepath=glb)
scene = bpy.context.scene
scene.render.fps = 24
scene.unit_settings.system = 'METRIC'
scene.unit_settings.length_unit = 'MILLIMETERS'

SETS = [
    ('01', 'carcaca_j4_lite', 'Carcaça'),
    ('02', 'placa_j4_lite', 'Placa principal'),
    ('03', 'bateria_j4_lite', 'Bateria'),
    ('04', 'protecao_interna_j4_lite', 'Proteção interna'),
    ('05', 'tampa_externa_j4_lite', 'Tampa externa'),
    ('06', 'chicote_j4_lite', 'Chicote'),
]
EXPLODE = {'carcaca_j4_lite': 0, 'bateria_j4_lite': 22, 'placa_j4_lite': 36, 'chicote_j4_lite': 36,
           'protecao_interna_j4_lite': 47, 'tampa_externa_j4_lite': 58}

# limpa as animações importadas: os keyframes são refeitos abaixo, legíveis e editáveis
for ob in bpy.data.objects:
    if ob.animation_data:
        ob.animation_data_clear()
for act in list(bpy.data.actions):
    bpy.data.actions.remove(act)

# coleções por conjunto
root = bpy.data.objects.get('J4_Lite')
col_root = bpy.data.collections.new('J4_Lite')
scene.collection.children.link(col_root)
for o in list(root.users_collection):
    o.objects.unlink(root)
col_root.objects.link(root)
sets = {}
for n, sid, nome in SETS:
    ob = bpy.data.objects[sid]
    sets[sid] = ob
    col = bpy.data.collections.new(f'{n}_{sid}')
    col_root.children.link(col)
    for o in [ob, *ob.children_recursive]:
        for c in list(o.users_collection):
            c.objects.unlink(o)
        col.objects.link(o)
    ob['conjunto'] = f'{n} · {nome}'

# eixo de explosão: +Z do modelo (glTF) vira -Y local no Blender (Y-up → Z-up)
rest = {sid: ob.location.copy() for sid, ob in sets.items()}
def z_at(sid, step):
    table = {
        'tampa_externa_j4_lite': [58, 58, 58, 58],
        'protecao_interna_j4_lite': [0, 47, 47, 47],
        'placa_j4_lite': [0, 0, 36, 36],
        'chicote_j4_lite': [0, 0, 36, 36],
        'bateria_j4_lite': [0, 0, 36, 22],
        'carcaca_j4_lite': [0, 0, 0, 0],
    }
    return 0 if step < 0 else table[sid][step]
def place(sid, d):
    sets[sid].location = rest[sid] + Vector((0, -d, 0))

STEP = 24
for sid in sets:
    # desmontagem: tampa → proteção → conjunto (placa + bateria + chicote) → bateria
    for s in range(-1, 4):
        place(sid, z_at(sid, s))
        sets[sid].keyframe_insert('location', frame=1 + (s + 1) * STEP)
    # montagem: bateria → conjunto → proteção → tampa
    for s in range(3, -2, -1):
        place(sid, z_at(sid, s))
        sets[sid].keyframe_insert('location', frame=121 + (3 - s) * STEP)
    place(sid, 0)
    sets[sid]['posicao_explodido_blender'] = list(rest[sid] + Vector((0, -EXPLODE[sid], 0)))

for name, f in [('MONTADO', 1), ('EXPLODIDO', 97), ('montagem 1 · bateria', 121), ('montagem 2 · conjunto', 145),
                ('montagem 3 · proteção', 169), ('montagem 4 · tampa', 193), ('MONTADO (remontado)', 217)]:
    scene.timeline_markers.new(name, frame=f)
scene.frame_start, scene.frame_end = 1, 217
scene.frame_set(1)

# mundo, luzes e câmera
world = bpy.data.worlds.new('estudio')
world.use_nodes = True
world.node_tree.nodes['Background'].inputs[0].default_value = (0.82, 0.81, 0.86, 1)
world.node_tree.nodes['Background'].inputs[1].default_value = 0.45
scene.world = world
def light(name, kind, energy, loc, rot, size=0.3):
    ld = bpy.data.lights.new(name, kind)
    ld.energy = energy
    if kind == 'AREA':
        ld.size = size
    lo = bpy.data.objects.new(name, ld)
    lo.location, lo.rotation_euler = loc, rot
    col_root.objects.link(lo)
light('luz_principal', 'AREA', 25, (0.16, -0.22, 0.2), (math.radians(45), 0, math.radians(35)), 0.25)
light('luz_recorte', 'AREA', 12, (-0.18, 0.18, 0.16), (math.radians(-50), 0, math.radians(205)), 0.2)
cam_data = bpy.data.cameras.new('camera')
cam_data.lens = 50
cam = bpy.data.objects.new('camera', cam_data)
col_root.objects.link(cam)
cam.location = (0.26, -0.36, 0.08)
target = bpy.data.objects.new('alvo_camera', None)
target.location = (0, -0.035, 0.022)
col_root.objects.link(target)
tc = cam.constraints.new('TRACK_TO')
tc.target = target
scene.camera = cam
scene.render.resolution_x, scene.render.resolution_y = 1920, 1080

bpy.ops.wm.save_as_mainfile(filepath=out, compress=True)
print('BLEND:', out, '| objetos:', len(bpy.data.objects), '| coleções:', [c.name for c in col_root.children], flush=True)
if not bpy.app.background or __name__ == '__main__':
    os._exit(0)  # o módulo bpy pode falhar ao encerrar o interpretador; o arquivo já está salvo
