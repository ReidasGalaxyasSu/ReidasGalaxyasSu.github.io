# Liquid Glass em softwares (nativos e desktop)

Para apps Apple use as APIs oficiais (nunca vidro feito à mão); para outras plataformas, o
equivalente do sistema. Fonte: *Adopting Liquid Glass* (ver `apple-oficial.md`).

## 1. SwiftUI (iOS/iPadOS/macOS 26+)

```swift
// Controles padrão já ganham o material ao compilar com o SDK novo.
Button("Concluir") { … }.buttonStyle(.glassProminent)     // ação principal (1–2 por tela)
Button("Filtros") { … }.buttonStyle(.glass)

// Vidro próprio em controle personalizado (com moderação)
Label("Ao vivo", systemImage: "dot.radiowaves.left.and.right")
    .padding(.horizontal, 16).padding(.vertical, 10)
    .glassEffect(.regular.tint(.orange).interactive(), in: .capsule)

// Vários vidros que se fundem (morph) e rendem melhor juntos
@Namespace private var ns
GlassEffectContainer(spacing: 20) {
    HStack(spacing: 20) {
        Image(systemName: "pencil").frame(width: 56, height: 56)
            .glassEffect().glassEffectID("edit", in: ns)
        if mostrarMais {
            Image(systemName: "eraser").frame(width: 56, height: 56)
                .glassEffect().glassEffectID("erase", in: ns)
        }
    }
}

// Navegação e layout
TabView { … }.tabViewStyle(.sidebarAdaptable).tabBarMinimizeBehavior(.onScrollDown)
Tab(role: .search) { BuscaView() }
NavigationSplitView { Sidebar() } detail: { Detalhe() }.inspector(isPresented: $info) { Info() }
Image("hero").resizable().scaledToFill().backgroundExtensionEffect()   // conteúdo sob a sidebar
.toolbar { ToolbarItemGroup { … }; ToolbarSpacer(.fixed); ToolbarItem { … } }
.scrollEdgeEffectStyle(.soft, for: .top)
.safeAreaBar(edge: .bottom) { BarraPropria() }      // barra própria com scroll edge effect
RoundedRectangle… → ConcentricRectangle()            // cantos concêntricos
Form { … }.formStyle(.grouped)
```

Variantes: `.regular` (padrão), `.clear` (só sobre mídia; + escurecimento 35% se clara),
`.tint(cor)`, `.interactive()` (reage ao toque). Agrupe vidros próprios em `GlassEffectContainer`.

## 2. UIKit / AppKit

```swift
// UIKit
let efeito = UIGlassEffect()                 // regular
let v = UIVisualEffectView(effect: efeito)
var cfg = UIButton.Configuration.prominentGlass()   // .glass(), .clearGlass(), .prominentClearGlass()
tabBarController.mode = .tabSidebar
tabBarController.tabBarMinimizeBehavior = .onScrollDown
// cantos concêntricos: UIView.cornerConfiguration com um UICornerConfiguration concêntrico ao
// contêiner (confira a assinatura exata na documentação do SDK em uso)
// barra própria com scroll edge: UIScrollEdgeElementContainerInteraction
// AppKit
let g = NSGlassEffectView(); botao.bezelStyle = .glass
// conteúdo sob sidebar: UIBackgroundExtensionView / NSBackgroundExtensionView
```

Remova `UIVisualEffectView`/fundos próprios de sheets, popovers, tab bars e toolbars: deixe o sistema
desenhar. Para manter o visual antigo temporariamente: `UIDesignRequiresCompatibility` no Info.plist.

Ícone do app: camadas planas (frente/meio/fundo) no **Icon Composer**; o sistema aplica reflexo,
refração, sombra e as aparências clara, escura, clear e tinted.

## 3. Outras plataformas (mesmo princípio, material do sistema)

| Plataforma | Material | Observação |
| --- | --- | --- |
| Electron (macOS) | `new BrowserWindow({ vibrancy: 'sidebar', visualEffectState: 'active', transparent: true })` | o vidro é da janela; o conteúdo HTML usa `apple-glass.css` por cima |
| Electron (Windows 11) | `backgroundMaterial: 'mica' \| 'acrylic' \| 'tabbed'` | Mica para janela, Acrylic para menus |
| Tauri | plugin `window-vibrancy` (`apply_vibrancy` macOS, `apply_mica`/`apply_acrylic` Windows) | fundo do webview transparente |
| Flutter | `BackdropFilter(filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20))` + `ClipRRect` + cor 60–75% | mesmas regras de camada; respeite `MediaQuery.of(context).highContrast` e `disableAnimations` |
| React Native | `expo-blur` (`<BlurView intensity={60} tint="systemChromeMaterial">`) ou `@react-native-community/blur` | no iOS 26, `expo-glass-effect` usa o material nativo quando disponível |
| Windows nativo (WinUI 3) | `MicaBackdrop`, `DesktopAcrylicBackdrop` | não imite Liquid Glass da Apple no Windows; use o material do sistema |

Regra para software multiplataforma: **cada sistema com seu material**. No macOS/iOS, Liquid Glass;
no Windows, Mica/Acrylic; no Android, Material 3 (sem vidro pesado). A identidade da marca fica no
conteúdo, na cor de destaque e na tipografia de títulos — não em reinventar o vidro.

## 4. Acessibilidade nativa

Teste com: Ajustes > Acessibilidade > Tela e Tamanho do Texto > **Reduzir Transparência**,
**Aumentar Contraste**; Movimento > **Reduzir Movimento**; e a opção de aparência do Liquid Glass nos
Ajustes. Cores próprias: variante clara, escura **e de contraste aumentado**. Todo ícone com rótulo
de acessibilidade. Dynamic Type em tudo.
