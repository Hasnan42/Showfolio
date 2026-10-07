# Step 2: Write the showfolio plan

Write `<output-dir>/showfolio-plan.md`. One focused page. This is the creative north star for the entire video.

The plan should specify what the video must communicate and what project material must be used. It should not prescribe low-level Hyperframes implementation details. Hyperframes will decide the concrete composition structure, animation mechanics, and render workflow from the brief in Step 3.

## Create the output directory

```bash
mkdir -p <output-dir>
```

## Structure of showfolio-plan.md

```markdown
# Showfolio Plan: [App Name]

## Intake
- Target length: [seconds, from Step 0]
- Must-show: [features/pages from Step 0; mark the favorite with ★]
- Purpose: [the user's one line]
- Login: [not needed / test account from user / test account from repo (where) / none — screens rebuilt from code]

## What is this app?
[One sentence. What it does, what makes it funny or impressive.]

## The angle
[The creative premise. The joke, the hook, the claim.
What makes this video specific to this project and not generic.]

## Hook (first 2-3 seconds)
[The opening moment. This is the most important decision.
What word, image, or motion earns the rest of the video?]

## Key moments (the middle)
[One segment per must-show feature from Step 0, the favorite first or at the centre with the most time.
Add 1-2 more highlights only if the target length has room.
Bullet points. Specific. "The altitude meter counting up." 
Not "feature callouts."]

## Outro / punchline
[How does it land? The final line. The beat before the logo.]

## User flow worth showing
[The 2–3 beats of *using* the product (entry → key action → result), pulled from
Step 1 question 9. This is the strongest material the video has — the centerpiece
scenes should show the flow, not just landing-page sections. If the project is
landing-page-only, write "none — landing-page only" and rely on Key moments instead.]

## Tone
- Preset: [default / polished / yc-parody / chaotic / deadpan / cinematic / app-store]
- Creative direction: [freeform phrase, inferred or user-provided]
- Interpretation: [one sentence on how this affects pacing, writing, visual energy, and restraint]

## Format: [landscape / vertical / square] — [width]x[height]
## Duration: [target seconds]

## Visual identity
### Octacer frame (fixed, see brand.md)
- Stage: Ink #040408, panels #0b0e14, White text, Lime #A3DC2F as the signal only
- Type: Space Grotesk (headlines) · Montserrat (body) · JetBrains Mono (eyebrows)
- Intro sting: [how the lime mark draws on and the wordmark arrives, 1.5-2.5s]
- Corner logo: [corner, size]
- Outro: [project name → Octacer logo → "Built by Octacer"]
- Where lime signals: [e.g. click ripple, active tab, verified tick, current feature segment]

### Product layer (from the project, for its screens only)
- Background: [exact color value]
- Accent: [exact color value]
- Text: [exact color value]
- Display font: [name]
- Body font: [name]
- Strongest visual element: [what from the site to reference]

## Share copy (draft)
[One sentence for Twitter/X/LinkedIn/Discord. Punchy. Not corporate.]

## Audio direction
- Role: [warm bed / sparse professional accents / cinematic support / dense rhythmic layer / intentional silence]
- Music: [candidate track / mood / none only if disabled, missing, or intentionally silent]
- Music treatment: [start time, volume posture, fade-in/out intent, beat/swell notes]
- Music cue guidance: [preset cue file read / unavailable; list 1-3 strongCue timestamps for major moments; list beat-grid windows for sequential events]
- Audio-reactive treatment: [none / subtle / expressive; what visual qualities may respond to music energy]
- SFX posture: [sparse / moderate / dense; motion-matched; professional restraint]
- Audio-coupled moments: [visual ideas that should consider sound, e.g. typed text, beat reveal, count-up, card sequence]
- Restraint rule: [what audio must not do]

## Storyboard

### Scene 1 — Octacer intro sting — [1.5-2.5]s
[Lime mark draws on, wordmark letters arrive, short hold. Per brand.md.]
Transition mood: clean → Scene 2

### Scene 2 — [name] — [duration]s
[What's on screen. What text appears. What product material must be referenced.]
Sequential/interaction: [yes — describe what appears one by one or what interaction is simulated, e.g. "3 stat cards arrive one by one" or "cursor clicks the match button"; or none]
Audio intent: [what the sound should do emotionally]
Audio-coupled idea: [typed text, beat-aligned reveal, counter ticks, card-by-card sequence, simulated tap/swipe/type — or none]
Music: [mood, or "none" only if disabled / missing / intentionally silent]
Transition mood: [clean / hard / dramatic / soft / chaotic] → Scene 2

### Scene 2 — [name] — [duration]s
[...]
Sequential/interaction: [yes — describe it; or none]
Audio intent: [what the sound should do emotionally]
Audio-coupled idea: [type or none]
Transition mood: [mood] → Scene 3

[... continue for all scenes]

**Music mood for this video:** [upbeat / cinematic / chaotic / deadpan / parody / none only if disabled / missing / intentionally silent]
**Audio summary:** [one sentence describing the full audio arc]
```

## Planning the scenes

The default pattern is:
```
Hook → Reveal → 2-3 highlights → Punchline/outro
```

But adapt it. These are the right scene counts for each tone **per 20 seconds of runtime** (a 60s video has about three times as many):

| Tone | Scenes | Pacing |
|---|---|---|
| `default` | 4-5 | Comfortable. Room for each moment to breathe. |
| `polished` | 3-4 | Fewer scenes, longer holds. Confidence through restraint. |
| `yc-parody` | 4-5 | Structured. The joke is how seriously it's delivered. |
| `chaotic` | 6-8 | Rapid. Some scenes under 2 seconds. |
| `deadpan` | 3-4 | Long holds. Big empty space. One word at a time. |
| `cinematic` | 4-5 | Wide shots. Big type. Dramatic reveals. |
| `app-store` | 4-6 | Feature cards. Clean reveals. No mess. |

## Duration guidance

Scene durations must sum to the Step 0 target (about 40, 60, or 90 seconds) within ±10%. Count them.

- Too short: add another real feature or extend a working-app moment (more of the flow), not longer static holds.
- Too long: tighten timing or trim the least important extra highlight. Never cut a must-show feature.
- Rough split: hook 3-5s, purpose/reveal 4-8s, outro 3-6s; the rest goes to the feature segments, with the favorite getting the largest share.

## Reading time (keep the pace, not at text's expense)

High pace comes from fast motion, fast transitions, and tight cuts — NOT from pulling text off screen before it can be read. Every text element a viewer must read needs enough fully-visible, settled time (entered, not yet exiting) to actually read it:

- Short label or 1-3 word line: about 0.8s settled.
- Headline or full sentence: about 0.3s per word, minimum ~1.2s. The hook line gets the most.

Plan that floor, then keep everything else fast: entrances and transitions stay snappy (0.3-0.6s) and motion stays energetic. A line can SLAM in fast and then HOLD — fast-in plus an adequate hold reads as punchy AND legible.

Two failure modes to design out at the plan stage:

- **Too much text for the scene length.** A 4s scene lands maybe 2-3 short reads at the floor, not 6. If a scene carries more text than its duration allows, cut copy or split the scene — do not speed it up.
- **Sequential text snapped onto a fast beat.** Beat-grid reveals can land ~0.5s apart at 110+ BPM (this is what rushed the bicycles spec rows). That spacing is fine for accents (glows, dots, ticks) but too fast for readable lines. For sequential TEXT, hold each item to the floor: snap to every other beat, or reveal them quickly and hold the full set on screen afterward. Flag any sequential text reveal in the storyboard with its intended hold.

## Choosing what to show

Every showfolio video must show something real from the product. Options, in preferred order:

1. **Recreate a working-app moment** — the upload screen, the result view, the dashboard with real-looking content. Use real source from `app/`, `pages/`, or routed components — not just the landing page. This is the most compelling option whenever the product has a flow. The product *doing* its thing beats the product *describing* its thing.
2. **Recreate a UI element in HTML** — a hero card, swipe UI, progress meter, stat block. Strong when there is no flow to show.
3. **Animate the core concept** — if the product is "taxis for taxis", animate two taxis where one is in the other. Pure graphic but grounded in the idea.
4. **Text-forward sequence** — if the product is copy-driven (Psychologists for Chatbots), let the copy be the visual. Giant display type, minimal chrome.

Never fill scenes with abstract patterns, color washes, or generic motion graphics that could belong to any video.

## Bias the storyboard toward the user flow

If Step 1 question 9 identified a real user flow, the **centerpiece scenes must show that flow** — not just landing-page recreations.

Good (working-app scenes):
- "Upload screen — cursor drops a video file. Filename appears. Progress bar fills 0→100% in 1.2s."
- "Three result thumbnails pop in: 0:15, 0:23, 0:31. Each shows a vertical clip frame with a real-looking caption."
- "Inbox row appears, gets a green 'resolved' badge, slides off the top of the list."

Avoid (marketing-only scenes when a flow exists):
- "16:9 → 9:16 transform diagram" — that's a *diagram of what the product does*, not the product doing it.
- "Three stat cards: 10x faster / 0 cuts / 3 clips" — that's the landing page's social-proof row, not the product.

Stat cards, headline blocks, and the landing-page hero still have a place — but at most one of them, used as a frame around the flow, not as a substitute. The centerpiece is the working app.

If the project has no app (landing-page-only static site), skip this section and recreate the landing-page strongest visual instead.

## Look for interaction and sequential reveal moments

Before writing the storyboard, ask: **does this product have things that can appear one by one, or actions that can be simulated?**

These are among the most effective moments in a showfolio video — they make the product feel alive and real, not like a slide deck. Look for:

- **Sequential reveals** — feature cards, stats, list items, match results, profile cards, menu options, or anything the product shows as a set. Design these to appear one by one so sound and motion reinforce each arrival. This is a storyboard decision, not an audio afterthought.
- **Simulated interaction** — if the product involves swiping, clicking, typing, selecting, or toggling, show it. A cursor clicking a button, a swipe gesture on a card, or text being typed into a field turns a static mockup into a demonstration. Sound matches the action automatically when the gesture is in the storyboard.

If a scene has either of these, commit to it explicitly in the scene description:
- Good: "3 horse profiles slide in one by one, each with a card sound"
- Good: "Simulate a right-swipe on Thunder's profile card"
- Good: "The hook line types out character by character with keyboard sounds"
- Avoid: leaving it vague and hoping Hyperframes adds rhythm on its own

Hyperframes can implement both patterns well — but only if the plan specifies what's appearing, in what order, and that interaction is being simulated. The plan is the contract.

## Audio planning

Choose the music direction in the plan. Leave exact SFX file selection and exact timestamps to Hyperframes during composition, because SFX should match the actual visual implementation.

Default posture: include audio. Pick a music bed and a few tasteful SFX unless the user passed `--no-music` / `--no-sfx`, the assets are missing, or silence is explicitly part of the concept.

For each scene, note the intended audio role and likely audio-coupled opportunities:

Format: `Audio-coupled idea: type the hook with subtle key ticks if Hyperframes uses a typing animation.`

For audio-reactive visuals, say what should respond and how restrained it should be. Example: `Audio-reactive treatment: subtle; use music RMS/bass to make the hero glow and product card presence breathe, not to add waveform bars.`

Do not require exact SFX filenames in `showfolio-plan.md` unless the user explicitly requested a specific sound or the mapping is unavoidable. Prefer moment types and intent.

Hyperframes has creative freedom to choose exact files, density, and timestamps that make the video feel smooth and professional.

Do not over-specify audio if the tone asks for restraint. For `yc-parody` or `deadpan`, use fewer and quieter cues, but prefer polished restraint over no audio.

## Music cue guidance

Beat/cue sync is available for any track now (see `audio.md` → "Beat and cue sources"): bundled tracks have precomputed presets; custom tracks get cues at composition time via `analyze_music_cues.py` (rich, needs Python) or `npx hyperframes beats` (simple, zero-dep). When the plan chooses music, add a compact `Music cue guidance` section to `showfolio-plan.md`:

- The track and, if a preset exists, its tempo.
- 1-3 strong-cue timestamps to target for major visual moments — from the preset if bundled, otherwise note "to be detected at composition time."
- Beat-grid windows for any sequential reveals in the storyboard.
- A restraint note when the tone is deadpan, yc-parody, or otherwise quiet.

See `audio.md` for the cue sources, JSON schema, and beat-sync tolerances.

If SFX are enabled, note likely sound opportunities but leave exact filenames to Hyperframes. Hyperframes should use the skill's `sfx-analysis.md` during composition.

## Handoff posture

- Good: "Recreate the swipe card with Thunder's profile and hay tags."
- Good: "Use the source site's amber/dark palette and serif headline feel."
- Good: "The stat reveal should feel like a deadpan startup metric slide."
- Avoid: "Use a GSAP timeline with this selector and this easing."
- Avoid: "Use this exact HTML structure."
- Avoid: "Load this specific runtime URL."

## Motion and pacing rules (hard numbers)

These are minimums, not suggestions. A video that breaks them feels slow and boring.

- **Render at 60fps.** Camera moves and cursor paths look choppy at 30fps.
- **Snappy camera.** A zoom or pan takes 0.5–0.8s with a strong ease-out (expo or quint): fast start, soft landing. Then it holds still. No slow drifts: a move never lasts longer than 1s, and the camera never creeps during a hold.
- **Short holds.** Hold any shot at most about 2.5s, unless the viewer is reading a line (0.3s per word) or watching typing. Every 2–3s something new must happen: a cut, a zoom, a click, typing, or a new state.
- **Every product scene has an interaction.** At least one: the cursor moves and clicks (with a click sound), typing, a toggle, or a reveal. A screenshot that only sits there is not a scene.
- **Cursor effects only, no boxes.** Don't draw outline boxes or rings around cards, buttons, or regions to point at them. Point with the cursor: a hover effect on the thing under it (a slight lift and shadow, like a real hover state), then a click press (the cursor scales down briefly, with an optional small soft ripple at the tip). The zoom and the cursor do the pointing.
- **Chat and input products show typing in real time.** Put a replica of the real input over the screenshot's input box, in the product's own font and colors. Type the text character by character (about 25–40 characters a second) with a blinking caret and soft key sounds. Then the cursor clicks Send, and the next state appears (the next real screenshot, or the reply streaming in).
- **The cursor is visible in most product scenes.** It travels on smooth curves (0.5–0.9s), presses (a small scale-down), and the click lands exactly on the real button.
- **States, not slides.** When the product changes state (panel opens, result appears, version changes), animate it the way the app would: slide the panel in, wipe the result in top to bottom like streaming text, fill the progress bar.
- **Scenes stay short.** A feature segment is 4–8s (the favorite up to about 12s). If a scene runs longer, split it into two actions.

## Transition vocabulary

Match transitions to tone:

| Tone | Preferred transitions |
|---|---|
| `default` | Crossfade, clean wipe |
| `polished` | Soft crossfade, slide |
| `yc-parody` | Hard cut, minimal |
| `chaotic` | Hard cut, flash, zoom |
| `deadpan` | Slow crossfade, long hold |
| `cinematic` | Dramatic wipe, crossfade |
| `app-store` | Slide, smooth wipe |

