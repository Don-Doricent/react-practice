# React Practice Lab

A personal React learning workspace. **This is not a collection of Scrimba solutions.** Every exercise begins as an unfinished prompt for independent implementation.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/).

## How to practice

1. Learn a concept in Scrimba.
2. Pick the matching exercise here (start with Effects + APIs).
3. Implement one small change without a full walkthrough. Look up syntax when needed.
4. Reinforce an older concept naturally (props, state, events, objects, array methods).
5. Record what worked, what you looked up, and the exact next task in `PROGRESS.md`.
6. Commit meaningful progress, then `git push` after connecting a remote repository.

**No need to create a new file or commit every day.** A feature might take several sessions. Avoid committing secrets or API keys.

## Folder guide

- `src/exercises/02-props-and-components/` — older component and prop skills
- `src/exercises/03-state-and-events/` — state and event handling
- `src/exercises/04-effects-and-apis/` — current Scrimba topic
- `src/exercises/05-js-mini-challenges/` — short JavaScript reasoning exercises

The `App.jsx` navigation is already functional. The exercises are intentionally not solved.

## Suggested first challenge

In `StarWarsFetch.jsx`, use state and an effect to fetch a Star Wars character. Display their name and height. Then extract a child component and pass the result as props.
