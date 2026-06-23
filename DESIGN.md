---
name: Cyber-Terminal Portfolio
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#e4d6ff'
  on-tertiary: '#3c0091'
  tertiary-container: '#cbb5ff'
  on-tertiary-container: '#5d24c6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  grid-unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  panel-padding: 32px
---

## Brand & Style
The brand personality is a high-performance, futuristic terminal—merging the raw efficiency of a developer’s workspace with the premium aesthetics of a high-tech HUD (Heads-Up Display). It targets an audience of technical recruiters, engineering leaders, and fellow developers who value precision, technical depth, and bleeding-edge aesthetics.

The design style is **Futuristic Glassmorphism** blended with **Cyber-Terminal** elements. It utilizes deep layering, semi-transparent panels, and glowing "data-light" accents. The UI should feel like a sophisticated operating system interface, utilizing subtle scanline textures, noise overlays, and metadata labeling to evoke a sense of continuous system monitoring and real-time processing.

## Colors
The palette is rooted in a deep-space navy background to maximize the contrast of "neon" luminous accents.
- **Primary (Electric Cyan):** Used for interactive states, critical HUD elements, and primary call-to-actions.
- **Secondary (Electric Blue):** Used for supporting graphics, data visualizations, and secondary navigation.
- **Highlight (Accent Violet):** Reserved for special highlights, decorative gradients, and "high-tier" project labels.
- **Success (Neon Green):** Exclusively for status indicators, active system signals, and completed milestones.
- **Surface:** Glassmorphic panels allow the background "grid" and noise textures to bleed through slightly, creating depth.

## Typography
The typographic hierarchy reflects a technical hierarchy. 
- **Headlines:** Space Grotesk provides a geometric, futuristic feel for high-impact titles. 
- **Body Content:** Inter ensures maximum readability for long-form project descriptions. 
- **System Labels:** JetBrains Mono is used for all metadata, "command-line" microcopy, and status tags to reinforce the terminal aesthetic. All monospace labels should be treated as "data output."

## Layout & Spacing
The layout follows a **Fluid Grid** system based on an 8px rhythmic unit. 
- **Grid Lines:** A background decorative grid (1px lines every 40px) is visible globally at 5% opacity.
- **HUD Panels:** Content is grouped into logical "sectors" or panels. These panels should use consistent inner padding (32px) to maintain a clean, organized data structure.
- **Breakpoints:** On mobile, complex sidebars collapse into a "Command Center" bottom sheet. On desktop, the layout utilizes a wide-screen approach with a fixed left-side navigation terminal.

## Elevation & Depth
Depth is created through **Glassmorphism and Tonal Layering** rather than traditional shadows.
- **Layer 0 (Background):** Solid #020617 with a subtle noise texture and fixed scanlines.
- **Layer 1 (Panels):** Semi-transparent navy (rgba(15, 23, 42, 0.65)) with a 12px backdrop blur.
- **Layer 2 (Overlays):** Modals and tooltips use a slightly lighter transparency with a vibrant 1px border.
- **Glow Effects:** Critical elements use an `outer-glow` (box-shadow: 0 0 15px rgba(34, 211, 238, 0.4)) instead of dark shadows to simulate light emission from a screen.

## Shapes
This design system uses **Sharp (0px)** corners to emphasize a precision-engineered, industrial terminal aesthetic. 
- All containers, buttons, and input fields must have hard 90-degree angles.
- Decorative "notches" (clipped corners) may be used on primary containers via `clip-path` to enhance the futuristic HUD look.

## Components
- **Buttons:** Hard-edged blocks. Primary buttons feature a solid Cyan background with black text; secondary buttons are ghost-style with a 1px Cyan border and a subtle hover glow.
- **Input Fields:** Terminal-style inputs. Prefixed with a `>` prompt character. Active state triggers a flickering cursor effect.
- **Status Chips:** High-contrast labels (e.g., `[STABLE]`, `[ERROR]`). Always set in JetBrains Mono. Success chips use the Neon Green accent.
- **Cards:** Project cards feature a header section with technical metadata (e.g., `UUID: 882-X`). The border should be a subtle Cyan at 25% opacity, increasing to 100% on hover.
- **HUD Divider:** Instead of a simple line, use a thin bar with a "loading" or "progress" segment graphic to maintain the technical theme.
- **Terminal Output:** A specialized component for displaying logs or code snippets, featuring a faint scanline overlay and green-tinted monospaced text.