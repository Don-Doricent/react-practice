// CHALLENGE 1 — Array Detective (5–10 minutes)
// Concepts: array indexing, objects, nested properties, JSX expressions.
// No tutorial needed. Look up syntax if you forget it.

const explorers = [
  {
    id: 101,
    name: "Ava",
    planet: { name: "Mars", distance: "225 million km" },
  },
  {
    id: 102,
    name: "Leo",
    planet: { name: "Venus", distance: "108 million km" },
  },
  {
    id: 103,
    name: "Mina",
    planet: { name: "Jupiter", distance: "778 million km" },
  },
];

export default function ArrayDetective() {
  const chosenIndex = 2;

  // TODO 1: Replace null with the object at chosenIndex in explorers.
  const chosenExplorer = explorers[chosenIndex];

  // TODO 2: Show the chosen explorer's name and planet name below.

  // TODO 3: Change chosenIndex to 0 and then 1. Does the page update correctly?
  // STRETCH: Show the chosen explorer's planet distance.

  return (
    <section>
      <h2>1. Array Detective</h2>
      <p>Get a single object out of an array, then read its properties.</p>
      <div className="work-area">
        <p>Explorer: {chosenExplorer.name}</p>
        <p>Planet: {chosenExplorer.planet.name}</p>
        <p>Distance: {chosenExplorer.planet.distance}</p> // Added the planet's
        distance as a stretch goal.
      </div>
    </section>
  );
}
