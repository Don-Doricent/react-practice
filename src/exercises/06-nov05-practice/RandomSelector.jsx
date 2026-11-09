import { useState } from "react";

// CHALLENGE 2 — Random Selector (10–15 minutes)
// Concepts: Math.random, Math.floor, array indexing, click handlers, state.

const snacks = [
  { id: 1, name: "Popcorn", category: "Salty" },
  { id: 2, name: "Apple slices", category: "Fruit" },
  { id: 3, name: "Greek yogurt", category: "Protein" },
  { id: 4, name: "Trail mix", category: "Crunchy" },
];

export default function RandomSelector() {
  const [selectedSnack, setSelectedSnack] = useState(null);

  function pickSnack() {
    // TODO 1: Generate a random valid index for snacks.
    // TODO 2: Get the object at that index.
    // TODO 3: Save that object in selectedSnack state.
    // Don't copy the Meme Generator code. Work it out, using docs if needed.
  }

  return (
    <section>
      <h2>2. Random Snack Selector </h2>
      <p>Click to pick a random object from an array.</p>
      <button type="button" onClick={pickSnack}>
        Pick a snack
      </button>
      <div className="work-area">
        <p>Snack: {selectedSnack?.name ?? "Nothing selected yet"}</p>
        <p>Category: {selectedSnack?.category ?? "—"}</p>
      </div>
    </section>
  );
}
