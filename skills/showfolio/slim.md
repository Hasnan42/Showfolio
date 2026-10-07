---
name: showfolio-slim
description: Turn an Octacer project (directory or website URL) into a polished, Octacer-branded showcase video (about 40, 60, or 90 seconds) with music, motion, and share copy. The project's real screens stay as they are; the intro, titles, backgrounds, and outro use Octacer branding with an animated logo. Asks three quick questions first — length, what to feature, and the one-line purpose — and asks for test credentials if the app needs a login. One file, no bundled assets — built entirely by the model with the tools already on the machine. Use when someone says "/showfolio-slim", "let's /showfolio this", "showcase a website", "make a showcase video", or wants to show off what they built. If the /showfolio skill is also installed, let /showfolio handle those phrases; it hands off here on Opus 5.5.
---

# /showfolio-slim

You built it. Now show it. You make the whole video yourself — story, visuals, audio, render — with whatever tools are on the machine.

Whatever the tone, it should feel like a modern, slick, polished showcase video: nothing on screen or in the soundtrack that doesn't earn its place. Every video presents a project **built by Octacer** (see "Octacer brand frame" below).

Usage: `/showfolio-slim [input] [options]`. Options (flags or plain language):

| Option | Default |
|---|---|
| `--tone <preset or freeform>` | inferred; `default` if nothing clearly fits |
| `--format landscape\|vertical\|square` | landscape (1920×1080; vertical 1080×1920, square 1080×1080), 60fps |
| `--duration <s>` | asked in step 0 (about 40, 60, or 90s) |

Write the deliverables to `showfolio-output/` in the current directory (timestamped `showfolio-output-YYYY-MM-DD-HHmmss/` if it already exists). Keep every intermediate file (frames, downloads, scripts, stems) in a `work/` subfolder inside it.

## 0. Intake

Before anything else, ask the user three questions in **one message** and wait for the answers. You may glance at the route or page list first so question 2 can offer real choices. Skip any question the invocation already answered.

1. **Length:** about how long should the video be? ~40s, ~60s, ~90s, or their own number. If they don't answer, use 60s and say so.
2. **What to feature:** which features or pages must be in the video? List the main ones you found. Ask them to mark the one they're proudest of; it gets the most screen time.
3. **Purpose:** in one line, what is this project for?

Every must-show item gets its own scene. The favorite gets the longest segment and the strongest slot. The purpose line is the spine of the story and the share copy. If a named feature doesn't exist in the code, or the purpose contradicts what the code does, say so.

**Login check.** Then decide whether the pages to be shown sit behind a login (login routes, auth middleware or route guards, auth libraries such as NextAuth, Clerk, Supabase, Firebase, Auth0, Passport, Devise). If so, get **test** credentials:

1. The user already gave them → use them.
2. Otherwise look in the repo for a demo or test account: README or docs ("demo account", "test user"), seed scripts and fixtures, end-to-end test login helpers, `.env.example`. Never open real `.env` files, keys, or secrets folders. If you find one, tell the user which account and where, and confirm it's a safe test account.
3. Nothing found → ask the user for a test account and the URL where the app runs (local or staging), and tell them it's only used to log in and capture screens.

If they'd rather not share, rebuild the logged-in screens from the code with fictional data.

**If the app can't be reached** (no URL resolves, or running it locally would touch a shared or production database), don't run it. Use the real screenshots already in the repo (docs, README, design folders) as the product layer, and still make them interactive. Type into a replica input placed over each screenshot's real input box. For hover states, lift a cropped copy of the card or button under the cursor. Slide panels in and wipe results in as the app would. Cut between consecutive screenshots as states change. Tell the user which source you used. Credentials are used only in the headless browser session. Pass them through environment variables, never write them to any file, and never show them on screen. A login screen in the video shows a fictional email and a masked password, and real user data is handled with the rule below.

**Blur, don't drop.** If an important screen shows real personal data (emails, names, phone numbers, avatars, customer records), keep the screen and blur only those spots: a strong Gaussian blur (about 8–12px at 1080p) over a box slightly bigger than the text, so it can't be read even when zoomed. Drop a screen only when the private data *is* the content and nothing useful is left after blurring. Blur the same spots in every frame, through zooms and pans. Screenshots that already use placeholder or fictional data need no blur.

## 1. Inspect

First decide what the input is, then gather material from it. Only the source changes; everything from the questions below onward is the same for every input. Read the must-show features from step 0 most closely.

| Input | How to recognize it | Where the material comes from |
|---|---|---|
| Project | No input given, and the current directory is a project | The code |
| Website | An `http(s)://` URL, or a bare domain like `example.com` | The live site |

If the input matches no type, or there's no input and the current directory isn't a project, ask the user what to showcase.

### Project

Read the code: the main page, styles (exact colors and fonts), README, routes and key components. The best material is the product **in use** — find its beats: entry → key action → result, for each must-show feature.

You have the source, so use it directly: import or render the project's real components, stylesheets, fonts, images and animations in the video instead of rebuilding them. For pages behind a login, run the app and log in with the test credentials from step 0 to capture the real logged-in screens.

### Website

Get the site as a visitor sees it. Many sites build their page with JavaScript, so a plain download can come back as an almost empty shell. If it does, load the page in a headless browser to get the rendered result. Dismiss cookie banners and other overlays, and scroll section by section, since content that animates in on scroll stays blank in a single full-page capture. Log in with the test credentials from step 0 to reach pages behind a login.

- **Copy:** headline, tagline, section headings, feature names, calls to action, testimonials. Also check the title, meta description and social-preview tags.
- **Identity:** exact colors from the site's CSS and the fonts it loads.
- **Visuals:** the logo, product screenshots, hero images, demo videos. Download the ones you'll use into `work/`.
- **Screenshots:** capture the page at the video's aspect ratio to understand the layout. In the video, reuse the site's real markup, CSS and assets and animate those, rather than panning over flat screenshots.
- **The product in use:** check the demo videos, how-it-works sections and linked docs for the entry → key action → result flow.

### Then, for every input

Before planning, answer: What is it (one sentence, starting from the user's purpose line)? Who is it for, and what does it do for them? What sets it apart? What's the most impressive or funniest claim? What's the visual hook? What real UI or flow shows each must-show feature? What tone fits? What's the one-line share caption?

## Octacer brand frame

The video has two layers that never mix. The **product layer** is the project's real screens, UI, copy, and data, in the project's own colors and fonts, unchanged. The **Octacer frame** is everything around and between them: stage backgrounds, titles, captions, feature labels, transitions, the intro, the outro, and the corner logo.

- **Palette (closed):** stage Ink `#040408`, panels `#0b0e14`, hairline borders `rgba(255,255,255,0.10)`, optional fine grid `rgba(255,255,255,0.05)`, White `#FFFFFF` for information, Muted `rgba(255,255,255,0.65)` for labels, Lime `#A3DC2F` (bright `#BBEF44`) as the signal. No other hues. Text on lime is always `#040408`.
- **Lime means something:** an active state, a verified tick, a small click ripple, the current feature segment, a progress fill. No lime boxes around things on the product screens; the cursor and the zoom do the pointing. Never use it as decoration: no glows, blobs, glowing dots, or washes.
- **Type:** Space Grotesk bold for headlines and feature names, Montserrat for body and captions, JetBrains Mono UPPERCASE with `0.14em` tracking for eyebrows (`FEATURE 02 · DOCUMENT READER`). All three are on Google Fonts. If the /showfolio skill is installed, its `assets/brand/fonts/` has them self-hosted.
- **Logo:** always this SVG. Never type "octacer" in a font, redraw it, recolor it, or add effects. Path 1 is the lime mark, which doubles as the "O". Paths 2–7 are the letters C-T-A-C-E-R. For the corner logo, use path 1 alone with `viewBox="0 0 29 28"`.

```svg
<svg width="170" height="28" viewBox="0 0 170 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9411 26.5149C16.793 26.8285 15.5839 27 14.3328 27C11.9515 27 9.71789 26.3893 7.78272 25.3239L14.3328 8.39238L19.7575 25.8763C24.4208 23.8505 27.6733 19.2966 27.6733 14.0001C27.6733 6.82026 21.7005 1 14.3328 1C6.96495 1 0.992188 6.82032 0.992188 14.0001C0.992188 18.1696 3.00904 21.878 6.14118 24.2568" stroke="#A3DC2F" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M35.7461 13.9987C35.7461 6.79727 41.2824 1 49.0918 1C53.8214 1 57.9645 3.37658 60.0911 7.04919L58.3678 8.02135C56.6813 4.92475 53.1249 2.83627 49.0918 2.83627C42.3456 2.83627 37.6893 7.80533 37.6893 13.9986C37.6893 20.1917 42.3456 25.1607 49.0918 25.1607C53.1615 25.1607 56.7546 23.0362 58.4412 19.8676L60.1643 20.8399C58.0745 24.5486 53.8949 26.9971 49.0919 26.9971C41.2824 26.9974 35.7461 21.2002 35.7461 13.9987Z" fill="white"/>
<path d="M80.1452 2.80037H72.079V26.2051H70.0994V2.80037H62.0332V1H80.1452V2.80037Z" fill="white"/>
<path d="M97.1224 19.7958H84.2534L81.7602 26.2051H79.707L89.6796 1H91.7328L101.669 26.2051H99.6155L97.1224 19.7958ZM96.4259 17.9954L90.7062 3.34047L84.9867 17.9954H96.4259Z" fill="white"/>
<path d="M103.025 13.9987C103.025 6.79727 108.562 1 116.371 1C121.101 1 125.244 3.37658 127.37 7.04919L125.647 8.02135C123.961 4.92475 120.404 2.83627 116.371 2.83627C109.625 2.83627 104.969 7.80533 104.969 13.9986C104.969 20.1917 109.625 25.1607 116.371 25.1607C120.441 25.1607 124.034 23.0362 125.721 19.8676L127.444 20.8399C125.354 24.5486 121.174 26.9971 116.371 26.9971C108.562 26.9974 103.025 21.2002 103.025 13.9987Z" fill="white"/>
<path d="M146.801 24.4046V26.205H132.025V1H146.618V2.80037H133.969V12.5944H145.701V14.3948H133.969V24.4048L146.801 24.4046Z" fill="white"/>
<path d="M161.614 15.8708H153.511V26.205H151.568V1H161.688C165.867 1 169.277 4.34867 169.277 8.45347C169.277 11.8742 166.894 14.7548 163.631 15.6189L170.01 26.205H167.774L161.614 15.8708ZM153.511 14.0706H161.688C164.804 14.0706 167.334 11.5501 167.334 8.45347C167.334 5.32083 164.804 2.80037 161.688 2.80037H153.511V14.0706Z" fill="white"/>
</svg>
```

- **Intro sting (1.5–2.5s, counts toward the duration):** Ink stage. The lime mark draws on (`pathLength="1"`, animate `stroke-dashoffset` 1→0). The letters then rise or fade in, staggered 40–60ms each. Hold about 0.5s, then the hook. No flares, particles, or glow.
- **Feature segments:** an eyebrow and feature name in the frame's type. The real screen plays inside a Panel-colored browser or device frame with a hairline border, centered on Ink. Captions sit outside the screen.
- **Corner logo:** the mark, bottom-right, about 6–9% of the width with a margin of about 3% of width, steady at 70–85% opacity, during product scenes.
- **Outro (3–5s):** project name → full Octacer logo → `Built by Octacer` (Muted Montserrat), with an optional `octacer.com` in JetBrains Mono. For a call to action, use only **Map Your System**.
- **Tone never changes the frame:** tone sets pacing and copy energy only. With no tone given, prefer `polished` or `app-store`.
- **No invented Octacer claims:** no client names, numbers, awards, or testimonials. Only "Built by Octacer", the project's own facts, and the user's purpose line.

## 2. Plan

Write `showfolio-plan.md`: the intake answers (length, must-show list with the favorite marked, purpose, and how login was handled, never the credentials themselves), the angle, the hook, one segment per must-show feature, the punchline, tone, visual identity, and a scene-by-scene storyboard with durations that sum to the target.

If the user points at one part — a new version, a new feature, one angle — make this the focus of the video.

**Shape:** Octacer sting (1.5–2.5s) → Hook (3–5s) → Purpose/reveal (4–8s) → one segment per must-show feature (6–15s each; the favorite gets the longest) → Outro with Octacer logo (3–5s). A starting shape, not a template.

## Creative laws

- **Octacer frame, real product.** The product's screens stay exactly as they are. Everything around them is Octacer: palette, fonts, the logo SVG, a logo sting at the start, and "Built by Octacer" at the end.
- **The length the user asked for.** Hit the step 0 target within ±10%. Fill it with product, not padding: more of each feature's flow, never longer holds on nothing.
- **Feature what they asked for.** Every must-show item has its own scene; the favorite gets the most time.
- **Clear to a stranger.** After one viewing, someone who's never heard of it knows what it does, who it's for, and how to get it. Lead with that, not with how it's built.
- **The hook is everything.** The first 2 seconds decide whether anyone keeps watching. Plan it first.
- **Show the thing.** Reuse the real thing from the source — its UI, components, copy, images, videos and animations — rather than re-creating it. Rebuild only what you can't reuse. Prefer the working app doing its job over a landing page describing it. Small illustrative UI text is fine when showing the product in use (a filename, an "Exported" toast); invented claims, numbers, or testimonials are not. Never abstract filler.
- **Specific.** It must feel made for this exact project. Use its own copy and claims; no generic SaaS language ("streamline your workflow" is banned).
- **Readable.** Pace comes from motion and cuts, not from pulling text away early. Any line the viewer is meant to read stays fully visible and settled long enough to read it (roughly 0.3s per word), counted from when the whole line is on screen. Text that's only texture doesn't need to be read.
- **Make it alive.** Things that appear one by one, simulated clicks, swipes, and typing beat static slides.
- **Funny earns its place.** Humor comes from the project's own absurdity, not from trying.
- **Every frame postable.** Any frozen frame should be worth sharing.

### Motion and pacing rules (hard numbers)

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

## Tones

Presets are defaults; freeform direction ("fake Series A launch from 2016") refines or overrides them. Scene counts are per 20s of runtime; scale them to the target length.

| Tone | Feel | Pacing / transitions |
|---|---|---|
| `default` | Punchy, playful, clean | 4–5 scenes; soft transitions |
| `polished` | Serious, elegant, restrained | 3–4 scenes, long holds; soft fades |
| `yc-parody` | Deadpan startup launch, played straight | 4–5 scenes, one claim each; hard cuts |
| `chaotic` | FAST, LOUD, ALL CAPS | 6–8 scenes, some under 2s; flash/zoom cuts |
| `deadpan` | Calm, dry, nothing is a joke | 3–4 scenes, big empty space; slow fades |
| `cinematic` | Trailer-scale, epic claims | 4–5 scenes, big type; dramatic wipes |
| `app-store` | Clean feature cards | 4–6 scenes; smooth slides |

## Sound

Write the music and sound effects as one piece: effects in the same key and the same space as the music, blended in rather than laid on top. Give it a basic, proper mix, the way a real track is mixed: effects sit softly under the music, nothing harsh or spiky, and repeated little sounds stay in the background. The music must run the full length of the video and fade out on purpose; for 60–90s, give it some development (a lift at the favorite feature, a resolve at the outro) instead of one loop.

## 3. Build, check, render

Build it with whatever works on this machine. If you draw the video in a browser, make every frame a pure function of time and wait for fonts and images to load before capturing each one.

Before the full render, look at stills from every scene *and* from mid-transition, and fix overflow, collisions, and low contrast. Check that no credential or readable real user data is visible in any frame, including zoomed shots. A plain crossfade between two busy layouts makes a muddy double exposure; stagger it (old content out, then new content in) or dip through the background. Then render `showfolio.mp4`.

## 4. Deliver

- **Poster:** pull the strongest *settled* frame (text fully in, not mid-transition), ideally a real screen inside the Octacer frame rather than the logo sting alone, to `showfolio.jpg`, and bake it in as frame 0 of `showfolio.mp4` so every platform's thumbnail shows it. Replace frame 0 rather than adding a frame, so the duration and audio sync stay the same.
- **`share-copy.txt`:** 1–3 sentences, postable as-is, specific, matching the tone, crediting Octacer as the builder ("Built by Octacer."). No "excited to share."
- **Tell the user** where the video and copy are, give one sentence on the creative angle, and offer to re-roll a scene or try another tone.
