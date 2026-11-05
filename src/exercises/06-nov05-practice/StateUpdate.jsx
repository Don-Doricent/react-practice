import { useState } from 'react'

// CHALLENGE 3 — Update One Property (10–15 minutes)
// Concepts: callback state updater, object spread, preserving other fields.

export default function StateUpdate() {
  const [player, setPlayer] = useState({
    name: 'Riley',
    score: 10,
    favoriteColor: 'blue',
  })

  function changeColor() {
    // TODO 1: Update favoriteColor to 'green'.
    // Keep name and score unchanged.
    // HINT: Update using the previous state, rather than replacing the
    // entire object with just one property.
  }

  function addPoint() {
    // TODO 2: Increase score by 1 while keeping the other fields.
  }

  return (
    <section>
      <h2>3. State Update Challenge</h2>
      <p>Update one property in a state object without losing the others.</p>
      <div className="work-area">
        <p>Player: {player.name}</p>
        <p>Score: {player.score}</p>
        <p>Favorite color: {player.favoriteColor}</p>
      </div>
      <button type="button" onClick={changeColor}>Change color to green</button>{' '}
      <button type="button" onClick={addPoint}>Add one point</button>
    </section>
  )
}
