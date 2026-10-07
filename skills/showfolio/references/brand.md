# Octacer brand frame

Every Showfolio video presents a project **built by Octacer**. The video has two layers, and they never mix:

| Layer | What it is | Whose look |
|---|---|---|
| **Product layer** | The project's real screens, UI, components, copy, and data shown *inside* a frame | The project's own colors, fonts, and layout, unchanged |
| **Octacer frame** | Everything around and between the screens: stage backgrounds, titles, captions, feature labels, transitions, intro, outro, corner logo | Octacer brand only (this file) |

Never recolor or restyle the product's screens to match Octacer, and never use the product's palette or fonts for the frame.

## Assets

All in `<skill-dir>/assets/brand/`. Copy them into the composition's `assets/` folder.

- `octacer-logo.svg`: the full logo (lime mark + white wordmark), for dark backgrounds. The mark is the "O": path 1 is the lime mark, and paths 2–7 are the letters C, T, A, C, E, R.
- `octacer-mark.svg`: the lime mark alone, for the corner logo and small spots.
- `octacer-sting-reference.html`: a working reference of the intro sting (real logo, timing, easing, written as a pure function of time `seek(t)`). Adapt it to the composition runtime; don't change the logo.
- `fonts/space-grotesk.woff2`, `fonts/montserrat.woff2`, `fonts/jetbrains-mono.woff2`: variable fonts. Load them with `@font-face` and wait for them before capturing frames.

**The wordmark is always the SVG.** Never type "octacer" in a font, redraw the logo, recolor it, stretch it, or add effects to it.

## Palette (closed)

| Token | Value | Use |
|---|---|---|
| Ink | `#040408` | Stage background, always dark |
| Panel | `#0b0e14` | Device or browser frames around screens, caption cards |
| Hairline | `rgba(255,255,255,0.10)` | Panel borders |
| Grid | `rgba(255,255,255,0.05)` | Optional fine engineering grid on the stage |
| White | `#FFFFFF` | Headlines and all information |
| Muted | `rgba(255,255,255,0.65)` | Labels, captions, secondary text |
| **Lime** | **`#A3DC2F`** (hover/bright `#BBEF44`) | The signal: the one accent |
| Blue whisper | `#3A76BB` | Optional, barely perceptible, top-right only. Usually omit. |

"Black is the environment. White is the information. Lime is the signal." No other hues in the frame: no navy, purple, cyan, orange, gold, or rainbow gradients. Text or icons on lime are always `#040408`.

**Lime must mean something.** Use it for an active or selected state, a verified tick, the cursor's small click ripple, the current feature's progress segment, or a positive delta. Don't use lime outline boxes to point at things on the product's screens; the cursor and the zoom do the pointing. Never use it as decoration: no lime washes, glowing blobs, glowing dots, or line markers. Ask "what is this lime saying?"

## Typography

| Role | Font | Style |
|---|---|---|
| Headlines, project title, feature names | Space Grotesk | Bold (600–700), tight tracking |
| Body, captions | Montserrat | Regular–Medium (400–500) |
| Eyebrows and micro-labels | JetBrains Mono | UPPERCASE, letter-spacing `0.14em`, Muted or Lime |

Eyebrow pattern for feature segments: `FEATURE 02 · DOCUMENT READER`. Readability comes first: big type, high contrast, generous space.

## Structure

1. **Octacer intro sting (1.5–2.5s, counts toward the duration).** Ink stage with the optional fine grid. The lime mark draws itself on (animate the stroke with `stroke-dasharray`/`stroke-dashoffset`; set `pathLength="1"` on the path). Then the letters C-T-A-C-E-R rise or fade in, staggered about 40–60ms each. Hold the full logo about 0.5s. Then the project's hook starts. Keep it crisp: no lens flares, particles, or glow.
2. **Project hook and purpose reveal.** Project name in Space Grotesk white, the user's purpose line under it in Montserrat Muted, and a small eyebrow `BUILT BY OCTACER` in JetBrains Mono.
3. **Feature segments.** Each must-show feature opens with its eyebrow and feature name in the frame. The product's real screen then plays inside a Panel-colored browser or device frame with a Hairline border, centered on the Ink stage. Captions sit outside the screen, in the frame's type.
4. **Corner logo.** During product scenes, `octacer-mark.svg` (or the full logo on wide formats) sits in a safe corner, bottom-right by default, about 6–9% of the canvas width with a margin of about 3% of width. It stays steady at about 70–85% opacity, with no animation.
5. **Outro (3–5s).** Ink stage. Project name, then the full Octacer logo, then the line `Built by Octacer` in Muted Montserrat. Optional final line in JetBrains Mono: `octacer.com`. If the share copy or plan calls for a call to action, use **Map Your System**, Octacer's only primary CTA.

## Motion

Motion shows a change of state (signal → route → decision → execute → verify), not decoration. Prefer clean slides, wipes, and crossfades through Ink. Every frame must make sense if the motion stopped: nothing important relies only on color or animation.

## Tone vs brand

The tone preset changes pacing, copy energy, and cut style. It never changes the frame's palette, fonts, or logo rules. A `chaotic` video is still Ink, White, and Lime. When the user gives no tone, prefer `polished` or `app-store`, which fit Octacer's "minimal but wow" style.

## Claims

Never invent Octacer facts: client names, numbers, awards, or testimonials. The frame may say "Built by Octacer", the project's own facts from its code, and the user's purpose line, nothing more. Client logos never appear unless the user supplies them for that project.
