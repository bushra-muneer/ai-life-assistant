# AI Life Assistant

Har roz ke kaam, smart tareeqe se.

AI Life Assistant is a mobile-first MVP for people who want practical help with daily tasks, career progress, and simple home planning. The app is intentionally focused: one clean interface, three useful assistant modules, local saved answers, and a server-side chat route ready for AI provider configuration.

## Why this exists

Most people do not want to learn perfect AI prompts. They want a simple place where they can choose a use case, explain the problem in normal language, and get a useful answer quickly.

## MVP sections

### Daily Life Assistant

For everyday writing and planning tasks.

- WhatsApp-style replies
- Study and daily planning
- Simple explanations
- Practical writing help

### Job and Freelance Coach

For students, job seekers, and beginners trying to improve their career options.

- CV improvement
- Freelance proposals
- Interview answer prep
- Career task planning

### Meal and Budget Planner

For simple food and budget decisions.

- What to cook today
- Budget meal planning
- Grocery lists
- Low-waste meal ideas

## Current MVP status

The first beta-ready roadmap is complete through Day 14.

Included in the MVP:

- Next.js app shell
- Mobile-first landing page
- Module cards and module navigation
- Shared assistant UI component
- Daily Life, Career, and Meal flows
- Reusable prompt templates
- Local saved-answer history
- Saved items page at `/saved`
- Onboarding preferences for language and response style
- Server-side `POST /api/chat` route
- Module-specific system prompts
- Local fallback responses when AI env variables are not configured
- Mobile and keyboard accessibility polish
- Beta QA checklist

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production build check

```bash
npm run build
npm run start
```

## AI route environment variables

Copy `.env.example` to `.env.local` for local development.

```bash
OPENAI_API_KEY=
OPENAI_MODEL=
```

The app does not require these values for the local fallback mode. Real provider responses require both variables.

## Useful routes

- `/` — main assistant homepage
- `/saved` — locally saved assistant previews
- `/api/chat` — server-side chat route

## Project notes

- Product notes: `docs/product-notes.md`
- Roadmap: `docs/roadmap.md`
- Working style: `docs/working-style.md`
- Beta QA checklist: `docs/beta-qa-checklist.md`

## Beta limitations

- Saved answers are browser-only and are not synced across devices.
- Onboarding preferences are stored locally.
- Frontend flows still use structured previews unless connected to `/api/chat`.
- No user accounts or cloud history yet.
- The UI is English-first, with Urdu, Hindi, and Roman Urdu preference support prepared for future personalization.
