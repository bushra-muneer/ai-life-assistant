# Beta QA Checklist

Use this checklist before sharing the AI Life Assistant MVP with beta users.

## Build verification

- [ ] Run `npm install` on a clean checkout.
- [ ] Run `npm run build` and confirm the production build completes.
- [ ] Run `npm run dev` and open the local development URL.
- [ ] Confirm no real API keys or secrets are committed.
- [ ] Confirm `.env.example` contains only empty placeholders.

## Homepage smoke test

- [ ] Header links work from the homepage.
- [ ] Hero buttons jump to Daily Life, Career, and Meal flows.
- [ ] Module cards are readable on desktop and mobile.
- [ ] Onboarding preferences can be selected and saved.
- [ ] Saved onboarding preferences remain after page refresh.

## Assistant flow testing

Test each module:

- [ ] Daily Life Assistant
- [ ] Job and Freelance Coach
- [ ] Meal and Budget Planner

For each module, confirm:

- [ ] Template buttons switch the active template.
- [ ] The textarea placeholder updates with the selected template.
- [ ] The preview changes after typing user text.
- [ ] Save preview stores the latest answer locally.
- [ ] Clear saved removes saved answers for that module.
- [ ] The layout remains usable on a narrow mobile screen.

## Saved items page

- [ ] Open `/saved` with no saved items and confirm the empty state is clear.
- [ ] Save at least one preview from each module.
- [ ] Open `/saved` and confirm all saved items appear.
- [ ] Confirm each Open flow button returns to the correct module section.
- [ ] Confirm Clear all saved removes saved items from all modules.
- [ ] Refresh `/saved` and confirm cleared items stay cleared.

## API route testing

Use a POST request to `/api/chat`.

Example request body:

```json
{
  "module": "daily",
  "templateTitle": "Plan my day",
  "message": "I have class, project work, groceries, and exam prep today."
}
```

Confirm:

- [ ] Empty body returns a validation error.
- [ ] Missing message returns a validation error.
- [ ] Message over 2,000 characters returns a validation error.
- [ ] With no env variables, the route returns a local fallback response.
- [ ] With `OPENAI_API_KEY` and `OPENAI_MODEL`, the route can call the provider from the server.

## Accessibility and mobile checks

- [ ] Press Tab and confirm the Skip to main content link appears.
- [ ] Keyboard focus outlines are visible on links, buttons, and textareas.
- [ ] Buttons are easy to tap on mobile.
- [ ] Hero call-to-action buttons stack cleanly on small screens.
- [ ] Text remains readable below 560px screen width.
- [ ] `/saved` page works on mobile.

## Beta release notes

Before sharing with beta users, mention these limitations:

- Saved items are stored only in the current browser.
- Frontend flows still show structured previews unless connected to `/api/chat`.
- The AI provider requires local environment variables.
- There is no user account or cloud sync yet.
- The UI is English-first, with language preference stored locally for future personalization.
