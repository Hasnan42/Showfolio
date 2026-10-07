# /showfolio

**You built it. Now show it.**

`/showfolio` is an agent skill that turns a project into a polished showcase video, with music, motion, and share copy included. Powered by [Hyperframes](https://hyperframes.heygen.com/).

Built by Hasnan for internal use at Octacer.

**Octacer branding is built in.** The project's real screens stay exactly as they are. Everything around them uses the Octacer brand: the animated logo intro, titles, feature labels, backgrounds, corner logo, and the "Built by Octacer" outro. That means Ink `#040408`, White, Lime `#A3DC2F`, and Space Grotesk / Montserrat / JetBrains Mono. Rules: `skills/showfolio/references/brand.md`. Assets: `skills/showfolio/assets/brand/`.

## How a run goes

1. **Three quick questions.** Showfolio asks:
   - **Length:** about 40, 60, or 90 seconds?
   - **What to feature:** which features or pages must be in the video? Mark your favorite and it gets the most screen time.
   - **Purpose:** in one line, what is the project for?
2. **Login check.** If those pages sit behind a login, it uses the test account you gave. If you didn't give one, it looks for a test account in the repo (README, seed data, e2e tests, `.env.example`), and if it finds none it asks you. Credentials are only used to log in and capture screens. They never appear in the video or any output file.
3. **Video.** It reads the code, plans and storyboards the video, builds it, and renders it.

## Use it

From any project directory, ask your agent:

```text
/showfolio
```

Skip a question by answering it up front:

```text
/showfolio --duration 60
/showfolio --tone polished --format vertical
```

Voiceover is off by default. Turn it on with:

```text
/showfolio --voice
```

Narration uses Kokoro through Hyperframes.

You get a `showfolio-output/` folder with the plan, a composition brief, share copy, the rendered `showfolio.mp4`, and a poster `showfolio.jpg`.

### Options

| Option | Values | Default |
|---|---|---|
| `--duration` | seconds (about 40, 60, or 90) | asked |
| `--tone` | `default`, `polished`, `yc-parody`, `chaotic`, `deadpan`, `cinematic`, `app-store`, or freeform | inferred |
| `--format` | `landscape`, `vertical`, `square` | `landscape` |
| `--no-music` / `--no-sfx` | flag | on |
| `--title` | string | from project |
| `--voice` | flag | off |

## `/showfolio-slim`

A lean, single-file version for Claude Opus 5.5. It asks the same questions and follows the same creative rules, with no Hyperframes and no bundled assets: the model builds the whole video itself. On Opus 5.5, `/showfolio` switches to it automatically. Run `/showfolio --full` to keep the Hyperframes workflow.

## Install

**Claude Code** (from a local copy of this folder):

```bash
/plugin marketplace add C:/Showfolio
/plugin install showfolio@showfolio
```

**Codex:**

```bash
codex plugin marketplace add C:/Showfolio
codex plugin add showfolio@showfolio
```

**Copy the skill directly:**

```bash
cp -r skills/showfolio ~/.claude/skills/showfolio
cp -r skills/showfolio-slim ~/.claude/skills/showfolio-slim   # optional
```

Restart the agent after copying. For other agents, point their custom instructions at `skills/showfolio/SKILL.md`.

## Requirements

- An agent that supports Agent Skills (Claude Code, Codex CLI, opencode, or any agent with custom instructions)
- Node.js 22+
- FFmpeg on `PATH`
- Hyperframes CLI: `npx hyperframes` (check it with `npx hyperframes doctor`)

## What's in this folder

- `skills/showfolio/`: the skill, step references, Octacer brand assets (logo, fonts, sting reference), and bundled music + SFX
- `skills/showfolio-slim/`: the single-file skill for Claude Opus 5.5
- `examples/`: sample product sites for testing
- `scripts/check-showfolio-slim.mjs`: checks `skills/showfolio/slim.md` matches `skills/showfolio-slim/SKILL.md`
- `plugin.json`, `.claude-plugin/`, `.codex-plugin/`: plugin manifests

## Credits

- Music: [ende.app](https://ende.app/en) "Happy Beats / Business Moves"
- Sound effects: [Kenney](https://kenney.nl/)
- Video engine: [Hyperframes](https://hyperframes.heygen.com/)
