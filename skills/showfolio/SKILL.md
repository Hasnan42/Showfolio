---
name: showfolio
description: Turn the current Octacer project into a polished, Octacer-branded showcase video (about 40, 60, or 90 seconds) using Hyperframes. The project's real screens stay as they are; everything around them (intro, titles, backgrounds, outro, animated logo) uses Octacer branding. Asks three quick questions first — video length, which features or pages to feature, and the project's one-line purpose — then asks for test credentials if the app sits behind a login. Use when someone says "/showfolio", "make a showcase video", "make a demo video", "turn this into a video", or wants to show off what they built. Reads the project code directly.
---

# /showfolio

You built it. Now show it.

## Invocation dispatch (must happen first)

**Model check.** If you are Claude Opus 5.5 and the invocation doesn't ask for the full workflow (`--full`, "use the full showfolio") or for voiceover (`--voice`, which showfolio-slim doesn't do), switch to showfolio-slim: read `<skill-dir>/slim.md` (the /showfolio-slim skill, bundled here) and follow it for the rest of this run instead of this file. Pass along the user's input, and pass any other options (`--no-music`, `--title`, …) as plain-language direction. Tell the user in one line first, e.g. "You're on Opus 5.5, so I'm using /showfolio-slim: I build the whole video myself. Say 'use the full showfolio' to switch back." If you are any other model, or can't tell which model you are, skip this check.

Before inspecting the project, parse the complete `/showfolio` invocation. If the
invocation contains `--voice`, set `voice.enabled = true`. Enable narration
only for that run. Do not enable narration automatically and do not fall back
to the normal no-voice workflow.

`/showfolio` turns the current project website or app into a polished, shareable showcase video using Hyperframes, presented as a project built by Octacer. It is narrow, opinionated, and fun.

**Octacer branding is always on.** The project's own screens appear exactly as they are, and the frame around them (animated logo intro, titles, backgrounds, labels, corner logo, outro) is Octacer. Rules and assets: [references/brand.md](references/brand.md) and `<skill-dir>/assets/brand/`.

## What this skill does

1. Asks the user three intake questions (length, what to feature, purpose) and gets test credentials if the app needs a login.
2. Reads the current project code to understand the app.
3. Plans a showcase concept specific to this project.
4. Scripts and storyboards the video inside the Octacer brand frame.
5. Hands a focused composition brief to Hyperframes.
6. Validates, renders, and writes share copy.

## Parsing the invocation

The user may invoke with natural language or flags:

```
/showfolio
/showfolio --duration 60
/showfolio --tone polished --format vertical
/showfolio this. Make it feel like a premium product film.
```

Parse these options:

| Option | Values | Default |
|---|---|---|
| `--tone` | preset or freeform description | inferred |
| `--format` | `landscape`, `vertical`, `square` | `landscape` |
| `--duration` | seconds (about 40, 60, or 90) | asked in Step 0 |
| `--no-music` | flag | music on |
| `--no-sfx` | flag | sfx on |
| `--title` | string | inferred from project |
| `--voice` | flag | narration off |

Voice is opt-in. If `--voice` is present, use Kokoro via Hyperframes and do
not add any provider-selection logic. The voice workflow is intentionally
single-provider.

Tone can be a preset (`default`, `polished`, `yc-parody`, `chaotic`, `deadpan`, `cinematic`, `app-store`) or a creative direction such as "fake Series A launch from 2016", "museum exhibit", or "overproduced mobile game ad".

When the user gives freeform tone direction, map it to the nearest preset for pacing and structure, but preserve the user's direction in the plan and composition brief.

## Narration guidance

When `--voice` is enabled, write narration that complements the visuals, does
not simply read visible text, matches scene pacing, sounds natural and
conversational, and moves smoothly between scenes. Keep the script concise and
specific to the product so the voice feels like part of the edit rather than a
separate narration track.

---

## Output directory

By default, output goes to `showfolio-output/`. To avoid overwriting previous runs, use a timestamped directory:

```
showfolio-output-2026-05-04-143022/
```

Use a timestamp when:
- The user explicitly asks for a new run without overriding previous results
- A `showfolio-output/` directory already exists in the project

Generate the timestamp at the start of the run (`YYYY-MM-DD-HHmmss`) and use it consistently for all output paths in that run: plan, brief, composition, render, and share copy.

## Skill directory

`<skill-dir>` is the directory containing this `SKILL.md`. Claude Code prints it as "Base directory for this skill" when the skill loads; for other agents it's wherever the skill was installed. Bundled assets are under `<skill-dir>/assets/` and scripts under `<skill-dir>/scripts/`. Don't guess an install path: a plugin install, a `~/.claude/skills/` copy, and this repo all put it somewhere different.

---

## Step 0: Intake

**Read:** [references/step-0-intake.md](references/step-0-intake.md)

Ask the user the three intake questions (video length, features/pages to feature, one-line purpose) in a single message and wait for the answers. Then run the login check: if the parts to be shown sit behind a login, use credentials the user gave, otherwise look for test credentials in the repo, otherwise ask the user for them.

**Gate:** You have a target duration, a must-show list (with the user's favorite marked), and a one-line purpose. If the app needs a login, you have working test credentials, or the user has said to go ahead without them.

---

## Step 1: Inspect the project

**Read:** [references/step-1-inspect.md](references/step-1-inspect.md)

Scan the project directory and extract the information needed to plan the video. Give extra attention to the features and pages the user picked in Step 0.

**Gate:** You can answer all 9 questions in the planning rubric.

---

## Step 2: Plan and storyboard

**Read:** [references/step-2-plan.md](references/step-2-plan.md)
**Read:** [references/brand.md](references/brand.md)

Write `<output-dir>/showfolio-plan.md` (where `<output-dir>` is `showfolio-output/` or the timestamped variant chosen above). Answer the planning rubric. Commit to a creative angle. Write the beat-by-beat storyboard including scenes, text, timing, transitions, and SFX cues.

When music is selected, include a compact `Music cue guidance` section: read the bundled track's cue preset from `<skill-dir>/assets/music/cues/` if present, otherwise note cues will be detected at composition time (any track now supports beat sync — see `references/audio.md`). Cue metadata is optional timing guidance only: story, readability, pacing, and product clarity stay primary.

**Gate:** `<output-dir>/showfolio-plan.md` exists with a full storyboard. Every must-show item from Step 0 has a scene. Scene durations sum to the target duration from Step 0, within ±10%.

---

## Step 3: Hand off to Hyperframes

**Read:** The Hyperframes domain skills — `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`. /showfolio is its own workflow: do not enter the `hyperframes` entry-point intent interview or route into its generic promo / launch-video workflow.
**Read:** [references/step-3-compose.md](references/step-3-compose.md)
**Read:** [references/audio.md](references/audio.md)
**Read:** [references/brand.md](references/brand.md)

Copy `<skill-dir>/assets/brand/` into the composition's assets. Write the composition brief and use Hyperframes to create the video implementation in `<output-dir>/composition/`.

`/showfolio` owns the product angle, source material, storyboard, tone, format, audio selection, music cue guidance, and delivery expectations. Hyperframes owns the concrete composition structure, exact animation timing, animation mechanics, runtime choices, linting rules, and render workflow.

**Gate:** `npx hyperframes check` passes with zero errors inside `<output-dir>/composition/` (the single browser gate before render — see hyperframes-cli for what it audits).

---

## Step 4: Validate, render, and deliver

**Read:** [references/step-4-deliver.md](references/step-4-deliver.md)

Validate, preview, render to `<output-dir>/showfolio.mp4`, pick the best poster frame into `<output-dir>/showfolio.jpg`, bake that poster as the video's frame 0 so it's the idle thumbnail everywhere, and write `<output-dir>/share-copy.txt`.

**Gate:** `<output-dir>/showfolio.mp4` exists. A best-frame poster `<output-dir>/showfolio.jpg` is picked (not an arbitrary frame) and baked as frame 0 of `showfolio.mp4`. Share copy is written. No credential appears in any output file or frame.

---

## Tone system

Seven tone presets ship with `/showfolio`. Each changes scripting energy, pacing, typography personality, and transition style. Presets are defaults, not limits.

Full definitions: [references/tones.md](references/tones.md)

| Tone | Energy | One-liner |
|---|---|---|
| `default` | Playful, clean, postable | The good-vibes default |
| `polished` | Serious, elegant | For projects that are not jokes |
| `yc-parody` | Deadpan startup energy | Fake seriousness applied to absurd projects |
| `chaotic` | Fast, loud, aggressive | Over-the-top and unhinged |
| `deadpan` | Calm, dry, understated | The joke is that nothing is a joke |
| `cinematic` | Dramatic, trailer-scale | Big motion, bigger claims |
| `app-store` | Smooth, feature-card clean | Corporate but not boring |

Always allow a freeform creative direction to refine or override the preset.

---

## Creative laws

These apply to every showfolio video regardless of tone.

**Octacer frame, real product.** The product's screens stay exactly as they are. Everything around them uses the Octacer brand (Ink `#040408`, White, Lime `#A3DC2F` as the signal; Space Grotesk, Montserrat, JetBrains Mono; the logo SVG, never typed). Open with the animated Octacer logo, close on "Built by Octacer". See [references/brand.md](references/brand.md).

**The length the user asked for.** Hit the Step 0 target (about 40, 60, or 90 seconds) within ±10%. Fill it with product, not padding: more features and longer working-app moments, never longer holds on nothing. This holds whether or not narration is on; narration does not extend the window.

**Feature what they asked for.** Every page or feature the user named in Step 0 gets its own scene. The one they marked as their favorite gets the most screen time and the strongest placement.

**Alive and fast.** 60fps, snappy 0.5–0.8s camera moves, no slow drifts, something new every 2–3s, the cursor clicking in most product scenes, and real-time typing in every chat or input box. Full numbers: "Motion and pacing rules" in [references/step-2-plan.md](references/step-2-plan.md).

**Readable.** Keep the pace high through motion and cuts, never by flashing text. Every line a viewer must read holds long enough to read it (short label ~0.8s settled; a sentence ~0.3s per word). Fast-in, then hold — never fast-in, then gone.

**Specific.** The video must feel like it was made for this exact project, not any project. The user's one-line purpose is the spine of the story.

**Show the thing.** Most scenes display actual UI, copy, or a key visual from the product. No abstract filler.

**No generic SaaS language.** "Streamline your workflow" is banned. Use the project's actual copy and claims.

**The hook is everything.** The first 2 seconds determine whether someone keeps watching. Plan the hook before anything else.

**Funny earns its place.** Humor should come from the project's absurdity, not from trying to be funny.

**Pattern:**
```
Octacer sting (1.5-2.5s) → Hook (3-5s) → Purpose/reveal (4-8s) → one segment per must-show feature (6-15s each; the favorite gets the longest) → Outro with Octacer logo (3-5s)
```

Adapt this. Size the feature segments so the total lands on the target. The pattern is a starting shape, not a template.
