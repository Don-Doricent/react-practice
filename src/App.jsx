import { useState } from "react";
import PropsPractice from "./exercises/02-props-and-components/PropsPractice.jsx";
import StatePractice from "./exercises/03-state-and-events/StatePractice.jsx";
import StarWarsFetch from "./exercises/04-effects-and-apis/StarWarsFetch.jsx";
import JsWarmups from "./exercises/05-js-mini-challenges/JsWarmups.jsx";
import Nov05Practice from "./exercises/06-nov05-practice/Nov05Practice.jsx";

const exercises = [
  {
    id: "effects",
    title: "Effects + APIs",
    category: "Current Scrimba topic",
    Component: StarWarsFetch,
  },
  {
    id: "props",
    title: "Props + Components",
    category: "Older React concept",
    Component: PropsPractice,
  },
  {
    id: "state",
    title: "State + Events",
    category: "Older React concept",
    Component: StatePractice,
  },
  {
    id: "js",
    title: "JavaScript Warmups",
    category: "Short reasoning practice",
    Component: JsWarmups,
  },
  {
    id: "nov05",
    title: "Nov 5 Drills",
    category: "Independent React practice",
    Component: Nov05Practice,
  },
];

export default function App() {
  const [selected, setSelected] = useState("effects");
  const active = exercises.find((exercise) => exercise.id === selected);
  const ActiveComponent = active.Component;

  return (
    <div className="app-shell">
      <header>
        <p className="eyebrow">Independent development</p>
        <h1>React Practice Lab</h1>
        <p className="lede">
          Learn in Scrimba. Implement here. Use documentation when needed—avoid
          copying whole solutions.
        </p>
      </header>

      <nav aria-label="Choose an exercise" className="exercise-tabs">
        {exercises.map((exercise) => (
          <button
            key={exercise.id}
            type="button"
            className={selected === exercise.id ? "tab active" : "tab"}
            aria-pressed={selected === exercise.id}
            onClick={() => setSelected(exercise.id)}
          >
            {exercise.title}
          </button>
        ))}
      </nav>

      <main className="panel">
        <p className="eyebrow">{active.category}</p>
        <ActiveComponent />
      </main>
      <footer>
        Small finished changes matter more than maintaining a streak. Write your
        next step in PROGRESS.md.
      </footer>
    </div>
  );
}
