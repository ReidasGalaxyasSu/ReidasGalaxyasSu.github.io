"""
Gera o modelo 3D do rastreador Realtracker J4 (5 conjuntos independentes)
com poses MONTADO / EXPLODIDO e animação de montagem/desmontagem.

Uso:  python3 build_j4.py <pasta_das_fotos> <pasta_de_saida> [--render]

Requer o módulo `bpy` (pip install bpy) e Pillow.

ESCALA: normalizada. 1,0 unidade = comprimento externo da carcaça.
Nenhuma medida em milímetros foi fornecida; todas as proporções foram
estimadas a partir das fotografias e precisam de conferência.

Eixos (Blender, Z para cima):
  X = largura, Y = comprimento (saída do chicote em +Y),
  Z = espessura. A face "THIS SIDE UP" da carcaça está em Z = 0 (voltada
  para -Z); a abertura da carcaça e a tampa ficam em +Z.
"""
import math
import os
import sys

import bpy  # noqa: E402  (bpy deve vir antes de bmesh/mathutils)
import bmesh
import numpy as np
from mathutils import Matrix, Vector
from mathutils.bvhtree import BVHTree
from PIL import Image, ImageFilter

PHOTOS = sys.argv[1]
OUT = sys.argv[2]
RENDER = "--render" in sys.argv
TEX = os.path.join(OUT, "textures")
os.makedirs(TEX, exist_ok=True)

# Fotos de referência (nomes dos arquivos enviados)
F_PCB_BLIND = os.path.join(PHOTOS, "eaa1908b-image.png")   # face das blindagens
F_PCB_ANT = os.path.join(PHOTOS, "aad67f89-image.png")     # face da antena
F_MONTADO = os.path.join(PHOTOS, "0c19e8a2-image.png")     # 3 vistas montado

# ---------------------------------------------------------------------------
# Parâmetros geométricos (unidades normalizadas)
# ---------------------------------------------------------------------------
CW, CL, CH = 0.56, 1.00, 0.22        # carcaça: largura, comprimento, altura
WALL, FLOOR = 0.035, 0.028
IN_W, IN_L = CW - 2 * WALL, CL - 2 * WALL
LUG = 0.065                           # ressaltos dos cantos internos
POST_XY = (0.212, 0.432)              # furos dos cantos / pinos da tampa
SEAT = 0.2205                         # apoio da tampa (folga de 0,0005)

PCB_W, PCB_Y0, PCB_Y1, PCB_T = 0.47, -0.41, 0.42, 0.014
PCB_Z0 = 0.111
PCB_Z1 = PCB_Z0 + PCB_T
NOTCH_X, NOTCH_Y = 0.062, 0.057

WIRE_R = 0.011
WIRE_Z = 0.097
G_PITCH = 0.030
PAD_Y = 0.38
PAD_X = [-0.144 + k * 0.0388 for k in range(8)]   # 8 furos da barra de pads

EXPLODE = {"carcaca_j4": 0.0, "tampa_j4": 0.95, "bateria_j4": 0.65, "placa_j4": 0.35, "chicote_j4": 0.35}

for _o in list(bpy.data.objects):
    bpy.data.objects.remove(_o)
bpy.context.preferences.filepaths.save_version = 0
col_main = bpy.data.collections.new("J4")
bpy.context.scene.collection.children.link(col_main)
col_tmp = bpy.data.collections.new("tmp")
bpy.context.scene.collection.children.link(col_tmp)


# ---------------------------------------------------------------------------
# Utilidades de malha
# ---------------------------------------------------------------------------
def link(ob, tmp=False):
    (col_tmp if tmp else col_main).objects.link(ob)
    return ob


def obj_from_bm(name, bm, tmp=False):
    me = bpy.data.meshes.new(name)
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    return link(bpy.data.objects.new(name, me), tmp)


def rrect(w, l, r, seg=8, cx=0.0, cy=0.0):
    pts = []
    for (x, y, a0) in [(w / 2 - r, l / 2 - r, 0), (-w / 2 + r, l / 2 - r, 90),
                       (-w / 2 + r, -l / 2 + r, 180), (w / 2 - r, -l / 2 + r, 270)]:
        for i in range(seg + 1):
            a = math.radians(a0 + 90 * i / seg)
            pts.append((cx + x + r * math.cos(a), cy + y + r * math.sin(a)))
    return pts


def prism_bm(pts, z0, z1):
    """Extrusão em Z de um polígono anti-horário."""
    bm = bmesh.new()
    bot = [bm.verts.new((x, y, z0)) for x, y in pts]
    top = [bm.verts.new((x, y, z1)) for x, y in pts]
    bm.faces.new(list(reversed(bot)))
    bm.faces.new(top)
    n = len(pts)
    for i in range(n):
        j = (i + 1) % n
        bm.faces.new((bot[i], bot[j], top[j], top[i]))
    return bm


def bevel_ring(bm, z, off, seg=3):
    ed = [e for e in bm.edges if all(abs(v.co.z - z) < 1e-7 for v in e.verts)
          and len(e.link_faces) == 2
          and abs(e.link_faces[0].normal.z) + abs(e.link_faces[1].normal.z) > 0.9]
    if ed:
        bmesh.ops.bevel(bm, geom=ed, offset=off, segments=seg, profile=0.5,
                        affect='EDGES', clamp_overlap=True)


def prism(name, pts, z0, z1, bev_top=0.0, bev_bot=0.0, tmp=False, seg=3):
    bm = prism_bm(pts, z0, z1)
    if bev_top:
        bevel_ring(bm, z1, bev_top, seg)
    if bev_bot:
        bevel_ring(bm, z0, bev_bot, seg)
    return obj_from_bm(name, bm, tmp)


def box(name, x0, x1, y0, y1, z0, z1, bev=0.0, tmp=False):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co.x = x0 if v.co.x < 0 else x1
        v.co.y = y0 if v.co.y < 0 else y1
        v.co.z = z0 if v.co.z < 0 else z1
    if bev:
        bmesh.ops.bevel(bm, geom=list(bm.edges), offset=bev, segments=2,
                        profile=0.5, affect='EDGES', clamp_overlap=True)
    return obj_from_bm(name, bm, tmp)


def cyl(name, r, p0, p1, seg=24, tmp=False, r1=None):
    """Cilindro (ou cone se r1) entre os pontos p0 e p1."""
    p0, p1 = Vector(p0), Vector(p1)
    d = p1 - p0
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=seg, radius1=r,
                          radius2=r if r1 is None else r1, depth=d.length)
    rot = d.normalized().to_track_quat('Z', 'Y').to_matrix().to_4x4()
    bmesh.ops.transform(bm, matrix=Matrix.Translation((p0 + p1) / 2) @ rot, verts=bm.verts)
    return obj_from_bm(name, bm, tmp)


def apply_mods(ob):
    bpy.context.view_layer.update()
    dg = bpy.context.evaluated_depsgraph_get()
    me = bpy.data.meshes.new_from_object(ob.evaluated_get(dg))
    ob.modifiers.clear()
    old = ob.data
    ob.data = me
    me.name = ob.name
    bpy.data.meshes.remove(old)


def boolean(target, cutter, op):
    m = target.modifiers.new("bool", 'BOOLEAN')
    m.object = cutter
    m.operation = op
    m.solver = 'EXACT'
    apply_mods(target)
    bpy.data.objects.remove(cutter)


def recenter(ob):
    """Coloca a origem no centro do volume envolvente (pivô do subobjeto)."""
    me = ob.data
    xs = [v.co for v in me.vertices]
    c = Vector((sum(v.x for v in xs), sum(v.y for v in xs), sum(v.z for v in xs))) / len(xs)
    lo = Vector((min(v.x for v in xs), min(v.y for v in xs), min(v.z for v in xs)))
    hi = Vector((max(v.x for v in xs), max(v.y for v in xs), max(v.z for v in xs)))
    c = (lo + hi) / 2
    me.transform(Matrix.Translation(-c))
    ob.location = ob.location + ob.rotation_euler.to_matrix() @ c
    return ob


def smooth_by_angle(ob, ang=35):
    me = ob.data
    for p in me.polygons:
        p.use_smooth = True
    try:
        me.set_sharp_from_angle(angle=math.radians(ang))
    except Exception:
        pass


# ---------------------------------------------------------------------------
# UV
# ---------------------------------------------------------------------------
def uv_box(ob, scale=6.0):
    me = ob.data
    uv = me.uv_layers.get("UVMap") or me.uv_layers.new(name="UVMap")
    mw = ob.matrix_world
    for p in me.polygons:
        n = p.normal
        ax = max(range(3), key=lambda i: abs(n[i]))
        for li in p.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co
            a, b = [co[i] for i in range(3) if i != ax]
            uv.data[li].uv = (a * scale, b * scale)


def uv_planar(ob, fn_top=None, fn_bot=None, slot_top=1, slot_bot=2, side_slot=0):
    """Projeta UV de cima (+Z) / de baixo (-Z) a partir de coordenadas do mundo
    na pose montada, e atribui o slot de material correspondente."""
    me = ob.data
    uv = me.uv_layers.get("UVMap") or me.uv_layers.new(name="UVMap")
    mw = ob.matrix_world
    for p in me.polygons:
        n = (mw.to_3x3() @ p.normal).normalized()
        fn, slot = None, side_slot
        if n.z > 0.7 and fn_top:
            fn, slot = fn_top, slot_top
        elif n.z < -0.7 and fn_bot:
            fn, slot = fn_bot, slot_bot
        p.material_index = slot
        for li in p.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co
            uv.data[li].uv = fn(co) if fn else (co.x * 6, co.y * 6)


def map_top(co):   # foto da face das blindagens, vista de +Z
    return ((co.x + PCB_W / 2) / PCB_W, (co.y - PCB_Y0) / (PCB_Y1 - PCB_Y0))


map_bot = map_top   # a foto da face da antena já é espelhada na textura


def set_mats(ob, mats):
    ob.data.materials.clear()
    for m in mats:
        ob.data.materials.append(m)


# ---------------------------------------------------------------------------
# Texturas (recortes das fotografias + mapa normal do plástico)
# ---------------------------------------------------------------------------
def save(img, name):
    p = os.path.join(TEX, name)
    img.save(p)
    return p


def make_textures():
    t = {}
    im = Image.open(F_PCB_BLIND).convert("RGB")
    t["pcb_top"] = save(im.crop((172, 62, 898, 1345)), "placa_face_blindagens.png")
    im = Image.open(F_PCB_ANT).convert("RGB")
    t["pcb_bot"] = save(im.crop((180, 100, 902, 1295)).transpose(Image.FLIP_LEFT_RIGHT),
                        "placa_face_antena.png")

    mont = Image.open(F_MONTADO).convert("RGB")
    a = np.asarray(mont).astype(float)
    # etiqueta de código de barras: maior região branca na face frontal
    sub = a[740:1010, 150:320]
    white = (sub.min(axis=2) > 200)
    ys, xs = np.nonzero(white)
    lb = (150 + xs.min(), 740 + ys.min(), 150 + xs.max() + 1, 740 + ys.max() + 1)
    t["label_box"] = lb
    t["label"] = save(mont.crop(lb), "etiqueta_codigo_barras.png")

    def emboss(box, name, key):
        """Inscrição em baixo-relevo: máscara das letras (mais escuras que o
        plástico ao redor) extraída da foto por passa-alta."""
        g = mont.crop(box).convert("L")
        a = np.asarray(g).astype(float)
        b = np.asarray(g.filter(ImageFilter.GaussianBlur(10))).astype(float)
        alpha = np.clip(((b - a) - 5) / 12.0, 0, 1)
        am = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.MedianFilter(3))
        rgba = Image.merge("RGBA", [Image.new("L", g.size, v) for v in (6, 6, 7)] + [am])
        t[key + "_box"] = box
        return save(rgba.resize((g.width * 4, g.height * 4), Image.LANCZOS), name + ".png")

    t["txt_up"] = emboss((172, 985, 292, 1172), "inscricao_j4_this_side_up", "txt_up")
    t["txt_side"] = emboss((556, 795, 606, 955), "inscricao_4g_gps", "txt_side")

    # mapa normal tileável do plástico texturizado
    rng = np.random.default_rng(4)
    n = 512
    noise = rng.normal(size=(n, n))
    f = np.fft.fft2(noise)
    ky = np.fft.fftfreq(n)[:, None]
    kx = np.fft.fftfreq(n)[None, :]
    k = np.sqrt(kx ** 2 + ky ** 2) + 1e-6
    h = np.real(np.fft.ifft2(f * np.exp(-(k * 60) ** 2) * (k > 0.004)))
    h = (h - h.mean()) / h.std()
    gx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * 0.5
    gy = (np.roll(h, -1, 0) - np.roll(h, 1, 0)) * 0.5
    s = 0.6
    nx, ny, nz = -gx * s, gy * s, np.ones_like(h)
    ln = np.sqrt(nx ** 2 + ny ** 2 + nz ** 2)
    rgb = np.dstack([nx / ln, ny / ln, nz / ln]) * 0.5 + 0.5
    t["plastic_n"] = save(Image.fromarray((rgb * 255).astype(np.uint8)), "plastico_normal.png")
    return t


TX = make_textures()


# ---------------------------------------------------------------------------
# Materiais PBR (compatíveis com glTF)
# ---------------------------------------------------------------------------
def load_img(path, noncolor=False):
    img = bpy.data.images.load(path, check_existing=True)
    if noncolor:
        img.colorspace_settings.name = 'Non-Color'
    return img


def mat(name, color=(0.5, 0.5, 0.5), metal=0.0, rough=0.5, tex=None, alpha_tex=False,
        normal=None, nstrength=0.35):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1.0)
    b.inputs["Metallic"].default_value = metal
    b.inputs["Roughness"].default_value = rough
    if tex:
        it = nt.nodes.new("ShaderNodeTexImage")
        it.image = load_img(tex)
        it.extension = 'EXTEND'
        nt.links.new(it.outputs["Color"], b.inputs["Base Color"])
        if alpha_tex:
            nt.links.new(it.outputs["Alpha"], b.inputs["Alpha"])
            try:
                m.surface_render_method = 'BLENDED'
            except Exception:
                m.blend_method = 'BLEND'
    if normal:
        it = nt.nodes.new("ShaderNodeTexImage")
        it.image = load_img(normal, noncolor=True)
        nm = nt.nodes.new("ShaderNodeNormalMap")
        nm.inputs["Strength"].default_value = nstrength
        nt.links.new(it.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], b.inputs["Normal"])
    m.diffuse_color = (*color, 1.0)
    return m


M = {
    "plastico": mat("plastico_preto_texturizado", (0.018, 0.018, 0.019), 0.0, 0.72,
                    normal=TX["plastic_n"]),
    "conector": mat("plastico_conector", (0.02, 0.02, 0.021), 0.0, 0.5),
    "borracha": mat("borracha_passa_fios", (0.015, 0.015, 0.015), 0.0, 0.85,
                    normal=TX["plastic_n"], nstrength=0.2),
    "etiqueta": mat("etiqueta_codigo_barras", rough=0.45, tex=TX["label"]),
    "txt_up": mat("inscricao_this_side_up", rough=0.4, tex=TX["txt_up"], alpha_tex=True),
    "txt_side": mat("inscricao_4g_gps", rough=0.4, tex=TX["txt_side"], alpha_tex=True),
    "pcb_borda": mat("pcb_borda", (0.03, 0.12, 0.38), 0.0, 0.5),
    "pcb_top": mat("foto_placa_face_blindagens", rough=0.45, tex=TX["pcb_top"]),
    "pcb_bot": mat("foto_placa_face_antena", rough=0.45, tex=TX["pcb_bot"]),
    "metal_top": mat("foto_blindagem_metal", metal=0.85, rough=0.35, tex=TX["pcb_top"]),
    "metal_bot": mat("foto_blindagem_metal_verso", metal=0.85, rough=0.35, tex=TX["pcb_bot"]),
    "metal": mat("metal_blindagem", (0.72, 0.72, 0.70), 0.9, 0.35),
    "ouro": mat("ouro", (1.0, 0.76, 0.33), 1.0, 0.28),
    "estanho": mat("estanho_solda", (0.80, 0.80, 0.80), 1.0, 0.25),
    "ceramica": mat("ceramica_antena_base", (0.11, 0.11, 0.11), 0.0, 0.6),
    "modulo_borda": mat("modulo_borda_verde", (0.06, 0.28, 0.12), 0.0, 0.5),
    "tantalo": mat("capacitor_tantalo", (0.95, 0.62, 0.10), 0.0, 0.45),
    "tantalo_top": mat("foto_capacitor_tantalo", rough=0.45, tex=TX["pcb_top"]),
    "smd": mat("componente_smd_cinza", (0.25, 0.25, 0.25), 0.2, 0.5),
    "sim_plast": mat("porta_sim_plastico", (0.02, 0.02, 0.02), 0.0, 0.45),
    "bat_film": mat("bateria_pelicula_aluminio", (0.82, 0.82, 0.83), 1.0, 0.28),
    "bat_tape": mat("bateria_fita_amarela", (0.92, 0.66, 0.08), 0.0, 0.18),
}
WIRE_COLORS = {
    "vermelho": (0.75, 0.02, 0.02), "preto": (0.012, 0.012, 0.012),
    "laranja": (0.95, 0.30, 0.0), "amarelo": (0.98, 0.78, 0.0),
    "verde": (0.0, 0.30, 0.13), "branco": (0.85, 0.85, 0.83),
    "roxo": (0.25, 0.05, 0.55),
}
for k, c in WIRE_COLORS.items():
    M["fio_" + k] = mat("fio_" + k, c, 0.0, 0.38)


# ---------------------------------------------------------------------------
# Conjuntos (empties) e hierarquia
# ---------------------------------------------------------------------------
root = link(bpy.data.objects.new("J4_rastreador", None))
root.empty_display_type = 'ARROWS'
root.empty_display_size = 0.2
root["escala"] = "normalizada: 1.0 = comprimento externo da carcaça (sem medidas verificadas)"


def conjunto(name, pivot, desc):
    e = link(bpy.data.objects.new(name, None))
    e.empty_display_type = 'PLAIN_AXES'
    e.empty_display_size = 0.08
    e.parent = root
    e.location = pivot
    e["descricao"] = desc
    e["pos_montado_blender_zup"] = list(pivot)
    p2 = Vector(pivot) + Vector((0, 0, EXPLODE[name]))
    e["pos_explodido_blender_zup"] = list(p2)
    return e


def attach(ob, parent, mats=None, smooth=None):
    if mats:
        set_mats(ob, mats)
    recenter(ob)
    if smooth:
        smooth_by_angle(ob, smooth)
    w = Matrix.Translation(ob.location) @ ob.rotation_euler.to_matrix().to_4x4()
    ob.parent = parent
    ob.matrix_parent_inverse = Matrix.Identity(4)
    ob.matrix_basis = Matrix.Translation(-Vector(parent.location)) @ w
    return ob


# ===========================================================================
# 1. CARCAÇA
# ===========================================================================
carcaca = conjunto("carcaca_j4", (0, 0, 0),
                   "Corpo principal oco. Face externa Z=0 = 'THIS SIDE UP'.")

body = prism("carcaca_corpo", rrect(CW, CL, 0.06, 10), 0.0, CH, bev_top=0.006, bev_bot=0.02, seg=4)
boolean(body, prism("cav", rrect(IN_W, IN_L, 0.025), FLOOR, 0.4, tmp=True), 'DIFFERENCE')
for sx in (-1, 1):
    for sy in (-1, 1):
        x0, x1 = sorted((sx * (IN_W / 2 - LUG), sx * (IN_W / 2 + 0.01)))
        y0, y1 = sorted((sy * (IN_L / 2 - LUG), sy * (IN_L / 2 + 0.01)))
        boolean(body, box("lug", x0, x1, y0, y1, FLOOR - 0.005, CH, tmp=True), 'UNION')
boolean(body, prism("degrau", rrect(IN_W + 0.018, IN_L + 0.018, 0.029), 0.204, 0.4, tmp=True), 'DIFFERENCE')
for sx in (-1, 1):
    for sy in (-1, 1):
        boolean(body, cyl("furo", 0.014, (sx * POST_XY[0], sy * POST_XY[1], 0.12),
                          (sx * POST_XY[0], sy * POST_XY[1], 0.4), tmp=True), 'DIFFERENCE')
# ressalto externo da saída do chicote
boolean(body, box("boss", -0.15, 0.15, CL / 2 - 0.01, CL / 2 + 0.035, 0.02, CH, bev=0.008, tmp=True), 'UNION')


def slot_profile(name, hw, zb, ztop, r, y0, y1, tmp=True):
    """Perfil em U (fundo arredondado) extrudado em Y."""
    pts = []
    zc = zb + r
    pts.append((hw, ztop))
    pts.append((-hw, ztop))
    for i in range(9):
        a = math.radians(180 + 90 * i / 8)
        pts.append((-hw + r + r * math.cos(a), zc + r * math.sin(a)))
    for i in range(9):
        a = math.radians(270 + 90 * i / 8)
        pts.append((hw - r + r * math.cos(a), zc + r * math.sin(a)))
    bm = bmesh.new()
    f = [bm.verts.new((x, y0, z)) for x, z in pts]
    b = [bm.verts.new((x, y1, z)) for x, z in pts]
    bm.faces.new(f)
    bm.faces.new(list(reversed(b)))
    n = len(pts)
    for i in range(n):
        j = (i + 1) % n
        bm.faces.new((f[j], f[i], b[i], b[j]))
    bm.normal_update()
    ob = obj_from_bm(name, bm, tmp)
    # garante normais para fora
    me = ob.data
    bm2 = bmesh.new()
    bm2.from_mesh(me)
    bmesh.ops.recalc_face_normals(bm2, faces=bm2.faces)
    bm2.to_mesh(me)
    bm2.free()
    return ob


boolean(body, slot_profile("slot", 0.106, 0.074, 0.4, 0.025, CL / 2 - 0.06, CL / 2 + 0.1), 'DIFFERENCE')
uv_box(body)
attach(body, carcaca, [M["plastico"]], smooth=40)

# decalques (inscrições por textura recortada das fotos)
SX, SY = CW / 262.0, CL / 505.0    # px -> unidade na vista frontal


def decal(name, corners_uv, material, parent):
    bm = bmesh.new()
    vs = [bm.verts.new(c) for c, _ in corners_uv]
    f = bm.faces.new(vs)
    uvl = bm.loops.layers.uv.new("UVMap")
    for loop, (_, uv) in zip(f.loops, corners_uv):
        loop[uvl].uv = uv
    ob = obj_from_bm(name, bm)
    return attach(ob, parent, [material])


def front_rect(box_px, z):
    x0p, y0p, x1p, y1p = box_px
    X0, X1 = -(x1p - 232) * SX, -(x0p - 232) * SX          # esquerda da foto = +X
    Y0, Y1 = -(y1p - 942) * SY, -(y0p - 942) * SY
    # ordem com normal -Z: (+X,-Y) -> (-X,-Y) -> (-X,+Y) -> (+X,+Y)
    return [((X1, Y0, z), (0, 0)), ((X1, Y1, z), (0, 1)), ((X0, Y1, z), (1, 1)), ((X0, Y0, z), (1, 0))]


decal("etiqueta_codigo_barras", front_rect(TX["label_box"], -0.0008), M["etiqueta"], carcaca)
decal("inscricao_j4_this_side_up", front_rect(TX["txt_up_box"], -0.0004), M["txt_up"], carcaca)
# lateral -X: vista lateral (foto do meio). Direita da foto = +Z, topo = +Y
x0p, y0p, x1p, y1p = TX["txt_side_box"]
Z0, Z1 = (x0p - 520) / 102 * CH, (x1p - 520) / 102 * CH
Y0, Y1 = -(y1p - 942) / 505 * CL, -(y0p - 942) / 505 * CL
xs = -CW / 2 - 0.0004
decal("inscricao_4g_gps", [((xs, Y0, Z0), (0, 0)), ((xs, Y0, Z1), (1, 0)),
                           ((xs, Y1, Z1), (1, 1)), ((xs, Y1, Z0), (0, 1))], M["txt_side"], carcaca)

# ===========================================================================
# 2. TAMPA (comprimento e largura integrais da carcaça)
# ===========================================================================
tampa = conjunto("tampa_j4", (0, 0, SEAT), "Tampa retangular de comprimento integral; encaixa no degrau da borda.")
Z = SEAT
lid = prism("tampa_corpo", rrect(CW, CL, 0.06, 10), Z, Z + 0.05, bev_top=0.016, bev_bot=0.004, seg=4)
boolean(lid, prism("bolso", rrect(IN_W, IN_L, 0.025), Z - 0.1, Z + 0.03, tmp=True), 'DIFFERENCE')
# lingueta perimetral que entra no degrau da carcaça
ring = prism("lingueta", rrect(IN_W + 0.015, IN_L + 0.015, 0.0275), Z - 0.015, Z + 0.001, tmp=True)
boolean(ring, prism("in", rrect(IN_W + 0.001, IN_L + 0.001, 0.0205), Z - 0.1, Z + 0.1, tmp=True), 'DIFFERENCE')
boolean(ring, box("corte_slot", -0.108, 0.108, CL / 2 - 0.1, CL / 2 + 0.1, Z - 0.1, Z + 0.1, tmp=True), 'DIFFERENCE')
boolean(lid, ring, 'UNION')
# pinos dos cantos
for sx in (-1, 1):
    for sy in (-1, 1):
        boolean(lid, cyl("pino", 0.011, (sx * POST_XY[0], sy * POST_XY[1], Z - 0.031),
                         (sx * POST_XY[0], sy * POST_XY[1], Z + 0.031), tmp=True), 'UNION')
# travas laterais (foto: 3 travas + 1 alça de um lado, 2 travas do outro)
cx0, cx1 = IN_W / 2 - 0.012, IN_W / 2 - 0.0005
for yc in (0.355, 0.17, -0.135):
    boolean(lid, box("trava", cx0, cx1, yc - 0.025, yc + 0.025, Z - 0.035, Z + 0.031, bev=0.002, tmp=True), 'UNION')
for yc in (0.27, -0.22):
    boolean(lid, box("trava", -cx1, -cx0, yc - 0.025, yc + 0.025, Z - 0.035, Z + 0.031, bev=0.002, tmp=True), 'UNION')
alca = box("alca", cx0, cx1, -0.035, 0.075, Z - 0.045, Z + 0.031, tmp=True)
boolean(alca, box("vao", cx0 - 0.01, cx1 + 0.01, -0.02, 0.06, Z - 0.032, Z - 0.005, tmp=True), 'DIFFERENCE')
boolean(lid, alca, 'UNION')
uv_box(lid)
attach(lid, tampa, [M["plastico"]], smooth=40)

# ===========================================================================
# 3. PLACA PRINCIPAL (uma única placa + componentes como subobjetos)
# ===========================================================================
PCB_CY = (PCB_Y0 + PCB_Y1) / 2
placa = conjunto("placa_j4", (0, PCB_CY, (PCB_Z0 + PCB_Z1) / 2),
                 "Placa principal única. Face da antena voltada para 'THIS SIDE UP' (-Z).")
hw = PCB_W / 2
outline = [
    (-hw + NOTCH_X, PCB_Y0), (hw - NOTCH_X, PCB_Y0), (hw - NOTCH_X, PCB_Y0 + NOTCH_Y),
    (hw, PCB_Y0 + NOTCH_Y), (hw, 0.19), (hw - 0.04, 0.19), (hw - 0.04, 0.208), (hw, 0.208),
    (hw, PCB_Y1 - NOTCH_Y), (hw - NOTCH_X, PCB_Y1 - NOTCH_Y), (hw - NOTCH_X, PCB_Y1),
    (-hw + NOTCH_X, PCB_Y1), (-hw + NOTCH_X, PCB_Y1 - NOTCH_Y), (-hw, PCB_Y1 - NOTCH_Y),
    (-hw, 0.208), (-hw + 0.04, 0.208), (-hw + 0.04, 0.19), (-hw, 0.19),
    (-hw, PCB_Y0 + NOTCH_Y), (-hw + NOTCH_X, PCB_Y0 + NOTCH_Y),
]
pcb = prism("placa_pcb", outline, PCB_Z0, PCB_Z1)
set_mats(pcb, [M["pcb_borda"], M["pcb_top"], M["pcb_bot"]])
uv_planar(pcb, map_top, map_bot)
attach(pcb, placa)


def comp(name, x0, x1, y0, y1, z0, z1, mats, top=False, bot=False, bev=0.0015):
    ob = box(name, x0, x1, y0, y1, z0, z1, bev=bev)
    set_mats(ob, mats)
    uv_planar(ob, map_top if top else None, map_bot if bot else None, 1, 1 if not top else 2)
    return attach(ob, placa)


S, BX = 0.47 / 726, 535
def tx(px): return (px - BX) * S                     # foto face blindagens
def ty(py): return PCB_Y1 - (py - 62) * S


# --- face das blindagens (+Z) ---
comp("blindagem_superior", tx(278), tx(885), ty(385), ty(165), PCB_Z1, PCB_Z1 + 0.022,
     [M["metal"], M["metal_top"]], top=True)
comp("blindagem_inferior", tx(228), tx(850), ty(915), ty(505), PCB_Z1, PCB_Z1 + 0.028,
     [M["metal"], M["metal_top"]], top=True)
comp("porta_sim_base", tx(265), tx(690), ty(1290), ty(940), PCB_Z1, PCB_Z1 + 0.006,
     [M["sim_plast"], M["pcb_top"]], top=True, bev=0.001)
comp("porta_sim_tampa_metal", tx(330), tx(690), ty(1280), ty(945), PCB_Z1 + 0.006, PCB_Z1 + 0.018,
     [M["metal"], M["metal_top"]], top=True, bev=0.001)
comp("capacitor_tantalo_1", tx(710), tx(780), ty(1120), ty(1065), PCB_Z1, PCB_Z1 + 0.014,
     [M["tantalo"], M["tantalo_top"]], top=True, bev=0.002)
comp("capacitor_tantalo_2", tx(710), tx(780), ty(1195), ty(1140), PCB_Z1, PCB_Z1 + 0.014,
     [M["tantalo"], M["tantalo_top"]], top=True, bev=0.002)
comp("indutor_smd", tx(712), tx(750), ty(1035), ty(985), PCB_Z1, PCB_Z1 + 0.012,
     [M["smd"], M["pcb_top"]], top=True, bev=0.002)
comp("conector_contatos_3vias", tx(600), tx(695), ty(475), ty(410), PCB_Z1, PCB_Z1 + 0.007,
     [M["sim_plast"], M["metal_top"]], top=True, bev=0.001)
ufl = cyl("conector_ufl", 0.011, (tx(520), ty(435), PCB_Z1), (tx(520), ty(435), PCB_Z1 + 0.008), seg=20)
attach(ufl, placa, [M["ouro"]], smooth=30)
for k in range(1, 8):    # pontas soldadas dos 7 fios na barra de pads
    st = cyl("ponta_solda_%d" % k, 0.008, (PAD_X[k], PAD_Y, PCB_Z1), (PAD_X[k], PAD_Y, PCB_Z1 + 0.014), seg=16, r1=0.003)
    attach(st, placa, [M["estanho"]], smooth=30)

# --- face da antena (-Z) ---  (foto espelhada: esquerda da foto = +X)
SA_X, SA_Y = 0.47 / 722, (PCB_Y1 - PCB_Y0) / 1195
def ax(px): return -(px - 541) * SA_X
def ay(py): return PCB_Y1 - (py - 100) * SA_Y


MZ = PCB_Z0 - 0.022
comp("modulo_celular_etiqueta", ax(895), ax(205), ay(1170), ay(540), MZ, PCB_Z0,
     [M["modulo_borda"], M["pcb_bot"]], bot=True, bev=0.001)
comp("blindagem_gnss", ax(760), ax(185), ay(520), ay(215), MZ, PCB_Z0,
     [M["metal"], M["metal_bot"]], bot=True, bev=0.001)
comp("antena_patch_gnss", ax(840), ax(232), ay(842), ay(272), MZ - 0.058, MZ - 0.0002,
     [M["ceramica"], M["pcb_bot"]], bot=True, bev=0.004)
pin_x = ax(300)
pg = cyl("pino_pogo_ouro", 0.0065, (pin_x, ay(1180), PCB_Z0 - 0.0068), (pin_x, PCB_Y0 - 0.02, PCB_Z0 - 0.0068), seg=16)
attach(pg, placa, [M["ouro"]], smooth=30)
pc = cyl("pino_pogo_base", 0.009, (pin_x, ay(1180), PCB_Z0 - 0.0092), (pin_x, ay(1215), PCB_Z0 - 0.0092), seg=16)
attach(pc, placa, [M["ouro"]], smooth=30)

# ===========================================================================
# 4. BATERIA
# ===========================================================================
BZ0, BT = 0.156, 0.055
BX0, BX1, BY0, BY1 = -0.1865, 0.2135, -0.125, 0.345
bateria = conjunto("bateria_j4", ((BX0 + BX1) / 2, (BY0 + BY1) / 2, BZ0),
                   "Bateria sobre as blindagens; porta-SIM livre.")
bat = prism("bateria_corpo", rrect(BX1 - BX0, BY1 - BY0, 0.01, 4, (BX0 + BX1) / 2, (BY0 + BY1) / 2),
            BZ0, BZ0 + BT, bev_top=0.008, bev_bot=0.008, seg=3)
uv_box(bat)
attach(bat, bateria, [M["bat_film"]], smooth=40)
tape = box("fita", BX0 - 0.0015, BX1 + 0.0015, BY1 - 0.11, BY1 + 0.0025, BZ0 - 0.0015, BZ0 + BT + 0.0015, bev=0.003)
boolean(tape, prism("nucleo", rrect(BX1 - BX0 + 0.0002, BY1 - BY0 + 0.0002, 0.01, 4, (BX0 + BX1) / 2, (BY0 + BY1) / 2),
                    BZ0 - 0.0001, BZ0 + BT + 0.0001, tmp=True), 'DIFFERENCE')
tape.name = "bateria_fita_amarela"
uv_box(tape)
attach(tape, bateria, [M["bat_tape"]], smooth=40)


def tube(name, pts, r, material, parent, res=4):
    cu = bpy.data.curves.new(name, 'CURVE')
    cu.dimensions = '3D'
    cu.bevel_depth = r
    cu.bevel_resolution = res
    cu.use_fill_caps = True
    sp = cu.splines.new('POLY')
    sp.points.add(len(pts) - 1)
    for p, c in zip(sp.points, pts):
        p.co = (*c, 1.0)
    ob = link(bpy.data.objects.new(name + "_c", cu), tmp=True)
    bpy.context.view_layer.update()
    me = bpy.data.meshes.new_from_object(ob.evaluated_get(bpy.context.evaluated_depsgraph_get()))
    bpy.data.objects.remove(ob)
    m = link(bpy.data.objects.new(name, me))
    uv_box(m)
    return attach(m, parent, [material], smooth=60)


def catmull(ctrl, n=10):
    out = []
    P = [Vector(c) for c in ctrl]
    P = [P[0]] + P + [P[-1]]
    for i in range(1, len(P) - 2):
        for s in range(n):
            t = s / n
            p0, p1, p2, p3 = P[i - 1], P[i], P[i + 1], P[i + 2]
            out.append(0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t
                              + (-p0 + 3 * p1 - 3 * p2 + p3) * t ** 3))
    out.append(P[-2])
    return [tuple(v) for v in out]


BW = 0.007
red = catmull([(-0.15, BY1 + 0.0025, 0.19), (-0.15, 0.368, 0.19), (-0.19, 0.374, 0.176),
               (-0.205, 0.355, 0.15), (-0.205, 0.33, 0.137), (-0.205, 0.323 + 0.0001, 0.1325)])
blk = catmull([(-0.12, BY1 + 0.0025, 0.19), (-0.12, 0.38, 0.19), (-0.20, 0.388, 0.178),
               (-0.224, 0.355, 0.16), (-0.224, 0.30, 0.142), (-0.205, 0.268, 0.1325)])
tube("bateria_fio_vermelho", red, BW, M["fio_vermelho"], bateria)
tube("bateria_fio_preto", blk, BW, M["fio_preto"], bateria)

# ===========================================================================
# 5. CHICOTE (passa-fios único + 7 fios + 2 conectores)
# ===========================================================================
G_Y0, G_Y1 = 0.4520, 0.568
chicote = conjunto("chicote_j4", (0, 0.51, WIRE_Z),
                   "Chicote: acompanha a placa na animação. 4 vias: vermelho, preto, laranja, amarelo; "
                   "3 vias: verde, branco, roxo.")
ORDER = ["vermelho", "preto", "laranja", "amarelo", "verde", "branco", "roxo"]
XG = [(3 - j) * G_PITCH for j in range(7)]

# passa-fios: núcleo no rasgo + flange interna + 2 flanges externas
gr = slot_profile("passa_fios", 0.1045, 0.0755, 0.2195, 0.0245, CL / 2 - WALL - 0.0005, CL / 2 + 0.0355, tmp=False)
boolean(gr, slot_profile("fl_int", 0.135, 0.0455, 0.2195, 0.04, G_Y0, CL / 2 - WALL - 0.0004), 'UNION')
boolean(gr, slot_profile("fl_ext", 0.135, 0.0455, 0.2195, 0.04, CL / 2 + 0.0354, 0.552), 'UNION')
boolean(gr, slot_profile("fl_ext2", 0.124, 0.056, 0.209, 0.035, 0.5515, G_Y1), 'UNION')
for x in XG:
    boolean(gr, cyl("furo_fio", WIRE_R + 0.0006, (x, G_Y0 - 0.02, WIRE_Z), (x, G_Y1 + 0.02, WIRE_Z), seg=20, tmp=True),
            'DIFFERENCE')
uv_box(gr)
attach(gr, chicote, [M["borracha"]], smooth=40)

# conectores
CY0, CY1 = 1.40, 1.59
XA, XB, ROT_B = 0.10, -0.16, math.radians(20)


def connector(name, nway, pitch, w, d):
    ob = box(name, -w / 2, w / 2, 0, CY1 - CY0, -d / 2, d / 2, bev=0.004)
    for i in range(nway):
        lx = (i - (nway - 1) / 2) * pitch
        boolean(ob, box("cav", lx - 0.016, lx + 0.016, 0.07, 0.3, -0.018, 0.018, tmp=True), 'DIFFERENCE')
        boolean(ob, box("entrada", lx - 0.0125, lx + 0.0125, -0.05, 0.0705, -0.0125, 0.0125, tmp=True), 'DIFFERENCE')
    # travas laterais com nervuras e nervura central (vistas nas fotos)
    for sx in (-1, 1):
        boolean(ob, box("aba", *sorted((sx * w / 2 - sx * 0.002, sx * (w / 2 + 0.018))), 0.05, 0.15,
                        -d / 2 + 0.02, d / 2 - 0.02, bev=0.003, tmp=True), 'UNION')
        for k in range(3):
            yk = 0.065 + k * 0.03
            boolean(ob, box("nerv", *sorted((sx * (w / 2 + 0.016), sx * (w / 2 + 0.024))), yk, yk + 0.012,
                            -d / 2 + 0.025, d / 2 - 0.025, tmp=True), 'UNION')
    boolean(ob, box("nerv_c", -0.018, 0.018, 0.02, CY1 - CY0 - 0.01, -d / 2 - 0.01, -d / 2 + 0.002, bev=0.002, tmp=True), 'UNION')
    uv_box(ob)
    return ob


ca = connector("conector_4vias", 4, 0.045, 0.20, 0.12)
ca.location = (XA, CY0, WIRE_Z)
attach(ca, chicote, [M["conector"]], smooth=40)
cb = connector("conector_3vias", 3, 0.04, 0.15, 0.11)
cb.location = (XB, CY0, WIRE_Z)
cb.rotation_euler = (0, ROT_B, 0)
bpy.context.view_layer.update()
attach(cb, chicote, [M["conector"]], smooth=40)


def conn_pin(j):
    if j < 4:
        return Vector((XA + (1.5 - j) * 0.045, CY0, WIRE_Z))
    lx = (5 - j) * 0.04
    v = Matrix.Rotation(ROT_B, 3, 'Y') @ Vector((lx, 0, 0))
    return Vector((XB, CY0, WIRE_Z)) + v


def smoothstep(t):
    t = min(max(t, 0.0), 1.0)
    return t * t * (3 - 2 * t)


for j, cname in enumerate(ORDER):
    xp, xg = PAD_X[7 - j], XG[j]
    pts = []
    # dentro: do pad (face da antena) até o passa-fios
    for i in range(13):
        y = PAD_Y + (G_Y0 - PAD_Y) * i / 12
        t = smoothstep((y - (PAD_Y + 0.008)) / (G_Y0 - 0.004 - PAD_Y - 0.008))
        pts.append((xp + (xg - xp) * t, y, WIRE_Z))
    pts.append((xg, G_Y1, WIRE_Z))
    # fora: curva suave até o conector
    end = conn_pin(j)
    ya, yb = G_Y1, CY0 - 0.08
    for i in range(1, 61):
        y = ya + (yb - ya) * i / 60
        t = smoothstep((y - ya) / (yb - ya))
        sway = -0.035 * math.sin(math.pi * (y - ya) / (yb - ya))
        pts.append((xg + (end.x - xg) * t + sway, y, WIRE_Z + (end.z - WIRE_Z) * t))
    pts.append((end.x, CY0 - 0.03, end.z))
    pts.append((end.x, CY0 + 0.069, end.z))   # entra no conector até o terminal
    tube("fio_%d_%s" % (j + 1, cname), pts, WIRE_R, M["fio_" + cname], chicote, res=3)

# ---------------------------------------------------------------------------
# Animação: MONTADO (f1) -> EXPLODIDO (f90) -> MONTADO (f200)
# ---------------------------------------------------------------------------
sc = bpy.context.scene
sc.name = "montagem_desmontagem"
sc.render.fps = 24
sc.frame_start, sc.frame_end = 1, 200
SETS = {e.name: e for e in (carcaca, tampa, placa, bateria, chicote)}
SCHEDULE = {   # (início, fim) da subida; descida espelhada
    "tampa_j4": ((1, 30), (170, 200)),
    "bateria_j4": ((30, 60), (140, 170)),
    "placa_j4": ((60, 90), (110, 140)),
    "chicote_j4": ((60, 90), (110, 140)),   # acompanha a placa
}
for name, ((u0, u1), (d0, d1)) in SCHEDULE.items():
    e = SETS[name]
    base = Vector(e.location)
    up = base + Vector((0, 0, EXPLODE[name]))
    for f, p in ((1, base), (u0, base), (u1, up), (d0, up), (d1, base), (200, base)):
        e.location = p
        e.keyframe_insert("location", frame=f)
    e.location = base
for f, n in ((1, "MONTADO"), (90, "EXPLODIDO"), (110, "EXPLODIDO_FIM"), (200, "MONTADO_FIM")):
    sc.timeline_markers.new(n, frame=f)

# ---------------------------------------------------------------------------
# Verificação de interpenetração entre conjuntos (montado e explodido)
# ---------------------------------------------------------------------------
def bvh(ob):
    mw = ob.matrix_world
    me = ob.data
    return BVHTree.FromPolygons([mw @ v.co for v in me.vertices], [tuple(p.vertices) for p in me.polygons])


def check(frame, label):
    sc.frame_set(frame)
    bpy.context.view_layer.update()
    meshes = [o for o in col_main.objects if o.type == 'MESH']
    trees = {o.name: bvh(o) for o in meshes}
    bad = []
    for i, a in enumerate(meshes):
        for b in meshes[i + 1:]:
            sa, sb = a.parent.name, b.parent.name
            if sa == sb and not (sa == "chicote_j4"):
                continue
            if trees[a.name].overlap(trees[b.name]):
                bad.append((a.name, b.name))
    for x, y in bad:
        A, B = trees[x], trees[y]
        pairs = A.overlap(B)
        print("      ex.:", pairs[:3])
    print("[%s] contatos/interseções entre peças: %d" % (label, len(bad)))
    for p in bad:
        print("    ", p)
    return bad


check(1, "MONTADO")
check(90, "EXPLODIDO")
sc.frame_set(1)

# limpar coleção temporária
for o in list(col_tmp.objects):
    bpy.data.objects.remove(o)
bpy.data.collections.remove(col_tmp)
for o in list(bpy.context.scene.collection.objects):
    pass

# ---------------------------------------------------------------------------
# Salvar .blend (editável) e exportar GLB
# ---------------------------------------------------------------------------
for img in bpy.data.images:
    if img.filepath:
        img.pack()
blend = os.path.join(OUT, "j4_rastreador.blend")
bpy.ops.wm.save_as_mainfile(filepath=blend, compress=True)
bpy.ops.export_scene.gltf(
    filepath=os.path.join(OUT, "j4_rastreador.glb"), export_format='GLB',
    export_extras=True, export_animations=True, export_animation_mode='SCENE',
    export_force_sampling=True, export_anim_scene_split_object=False,
    export_optimize_animation_size=False, export_yup=True, export_apply=False,
    export_image_format='AUTO')
print("salvo:", blend)

# ---------------------------------------------------------------------------
# Renderizações de conferência (opcional)
# ---------------------------------------------------------------------------
if RENDER:
    sc.render.engine = 'CYCLES'
    sc.cycles.device = 'CPU'
    sc.cycles.samples = 48
    sc.cycles.use_denoising = True
    sc.render.resolution_x, sc.render.resolution_y = 1400, 900
    world = bpy.data.worlds.new("w")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.82, 0.83, 0.85, 1)
    world.node_tree.nodes["Background"].inputs[1].default_value = 0.9
    sc.world = world
    for nm, rot, en in (("key", (math.radians(40), math.radians(-20), math.radians(30)), 3.5),
                        ("fill", (math.radians(60), math.radians(30), math.radians(200)), 1.5)):
        ld = bpy.data.lights.new(nm, 'SUN')
        ld.energy = en
        lo = bpy.data.objects.new(nm, ld)
        lo.rotation_euler = rot
        sc.collection.objects.link(lo)
    cam_d = bpy.data.cameras.new("cam")
    cam = bpy.data.objects.new("cam", cam_d)
    sc.collection.objects.link(cam)
    sc.camera = cam

    def shot(frame, loc, target, lens, name):
        sc.frame_set(frame)
        cam.location = loc
        d = Vector(target) - Vector(loc)
        cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
        cam_d.lens = lens
        sc.render.filepath = os.path.join(OUT, "previews", name)
        bpy.ops.render.render(write_still=True)

    shot(1, (1.7, -1.5, 1.5), (0, 0.35, 0.1), 40, "montado.png")
    shot(90, (2.0, -1.9, 1.7), (0, 0.35, 0.5), 38, "explodido.png")
    shot(1, (0.9, -1.0, -1.1), (0, 0.3, 0.1), 40, "montado_face_this_side_up.png")
    shot(1, (0.0, 0.25, -2.6), (0, 0.25, 0.1), 42, "montado_vista_frontal.png")
    shot(90, (-2.2, -0.3, 0.9), (0, 0.4, 0.45), 40, "explodido_lateral.png")
