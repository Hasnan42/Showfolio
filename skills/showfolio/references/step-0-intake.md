# Step 0: Intake

Before reading the project in depth, ask the user three questions. Their answers decide the length, the scenes, and the story of the video.

## Ask the three questions

You may glance at the project's route or page list first (a minute, no deep reading) so question 2 can offer real choices. Then ask all three in **one message** and wait for the answers. Skip any question the invocation already answered (for example `--duration 60` answers question 1).

```
Before I make the video, three quick questions:

1. Length — about how long should it be?
   ~40s · ~60s · ~90s (or give your own number)

2. What to feature — which features or pages must be in the video?
   [list the main pages/features you found, e.g. Dashboard, Document reader, Reply-in-video]
   Mark the one you're proudest of ("this one is too good, show it") and it gets the most screen time.

3. Purpose — in one line, what is this project for?
```

If the agent has a structured question tool, you may use it, but keep it to these three questions.

## Use the answers

- **Length** becomes the target duration. Scene durations must sum to it within ±10%. If the user doesn't answer, use 60 seconds and say so.
- **Must-show list** becomes required scenes. Each item gets its own scene or segment in the storyboard. The marked favorite gets the longest segment and the strongest slot (usually the centerpiece, right after the reveal). If the user names something the code doesn't have, say so and ask whether to drop it or show something close.
- **Purpose line** becomes the spine of the story: the reveal scene and the share copy build on it. Keep the user's wording where it reads well. If it contradicts what the code does, mention the gap and go with the user's framing unless it would put a false claim on screen.

Write all three answers at the top of `showfolio-plan.md` under `## Intake`.

## Login check

After the answers, decide whether the pages to be shown sit behind a login. Signs:

- Login, sign-in, or sign-up routes and pages
- Auth middleware, route guards, or "protected" wrappers that redirect to a login page
- Auth libraries: NextAuth/Auth.js, Clerk, Supabase Auth, Firebase Auth, Auth0, Passport, Devise, Django or Laravel auth, JWT guards
- API calls that send a session cookie or bearer token

If nothing is behind a login, skip to Step 1.

If it is, get **test** credentials in this order:

1. **The user already gave them** (in the invocation or the answers) → use them.
2. **Look in the repo** for a demo or test account:
   - README or docs sections like "demo account", "test user", "default login"
   - Seed scripts, fixtures, factories (`seed.*`, `fixtures/`, `factories/`)
   - End-to-end test login helpers (Playwright, Cypress)
   - `.env.example` / `.env.sample` placeholders

   Never open real `.env` files, key files, or secrets folders to find them (see Step 1's skip list). If you find an account, tell the user which one and where you found it, and confirm it's a test account that's safe to use.
3. **Nothing found** → ask the user:

   ```
   This app needs a login to reach [pages]. Can you share a test account
   (email/username + password) and the URL where the app is running
   (local or staging)? I only use it to log in and capture those screens.
   It won't appear in the video or any file.
   ```

**If the app can't be reached** (no URL resolves, or running it locally would touch a shared or production database), don't run it. Use the real screenshots already in the repo (docs, README, design folders) as the product layer, and still make them interactive. Type into a replica input placed over each screenshot's real input box. For hover states, lift a cropped copy of the card or button under the cursor. Slide panels in and wipe results in as the app would. Cut between consecutive screenshots as states change. Tell the user which source you used.

If the user doesn't want to share credentials, continue without them: rebuild the logged-in screens from the components in code with fictional data, and note this in the plan.

## Using the credentials

- Use them only to log in to the running app in a headless browser and capture the logged-in screens (rendered markup, styles, screenshots) as source material for the composition.
- Never write them into `showfolio-plan.md`, `composition-brief.md`, the composition, the rendered video, share copy, or any other output file. Pass them to capture scripts through environment variables, not files.
- If a login screen appears in the video, show a fictional email and a masked password.
- Real user data in captured screens (emails, names, phone numbers): blur those spots and keep the screen (see Step 1's "Blur, don't drop" rule). Credentials are always removed, never just blurred.
