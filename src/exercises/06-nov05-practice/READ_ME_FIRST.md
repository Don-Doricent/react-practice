# November 5 — React Practice Pack

These are **unfinished starter exercises**. No solutions are provided.

## Install into your existing React Practice Lab

Unzip the pack from your project root:

```bash
cd ~/Code/react-practice
unzip ~/Downloads/react-practice-nov05-challenges.zip
```

The ZIP adds only `src/exercises/06-nov05-practice/` — it does not overwrite your `App.jsx`, existing exercises, package.json, or Git setup.

## Add one tab to your existing App.jsx

**1.** Alongside your other imports at the top of `src/App.jsx`, add:

```jsx
import Nov05Practice from './exercises/06-nov05-practice/Nov05Practice.jsx'
```

**2.** Inside the existing `exercises` array in `src/App.jsx`, add this object (leave your current objects in place):

```jsx
{ id: 'nov05', title: 'Nov 5 Drills', category: 'Independent review: arrays, state, callbacks', Component: Nov05Practice },
```

**3.** Run `npm run dev` if it isn't already running. Select **Nov 5 Drills** in the dashboard. Within that screen, select each challenge.

## The challenges

1. **Array Detective (5–10 min):** index into an array, get nested object properties.
2. **Random Snack Selector (10–15 min):** choose a random array item when a button is clicked.
3. **State Update Challenge (10–15 min):** update one field of a React state object without losing the rest.
4. **Movie Night Picker (20–30+ min):** combine random selection, state, event handlers, and props. Favoriting an item is optional stretch work.

### Rules

- Try each exercise before referencing the completed Meme Generator code.
- Looking up individual methods and syntax is allowed.
- If stuck for 15 minutes, ask for **Hint 1** on the specific numbered task. Don't request a full solution immediately.
- The first three challenges are the priority; the fourth can wait.
- In `PROGRESS.md`, record what you implemented and what you needed to look up.
- When you have actual progress to record, commit and push it to GitHub.

## Note

These tasks are deliberately different from Scrimba's Meme Generator so you can practice applying the same ideas, not just reproducing a lesson.
