export default function StarWarsFetch() {
  // CURRENT SCRIMBA CONCEPT: fetching, state, and useEffect
  // TODO (in order):
  // 1. Create state to hold a Star Wars character.
  // 2. Fetch https://swapi.dev/api/people/1 from an effect.
  // 3. Display the name and one other detail (not the entire JSON).
  // 4. OLD CONCEPT REVIEW: move the display into a CharacterCard child
  //    component and pass the character using props.
  // 5. Bonus (later lesson): loading / error messages.
  // IMPORTANT: Do not put fetch directly in the component body.
  // Try each step without looking at the instructor's solution.

  return (
    <section>
      <h2>Effects + APIs</h2>
      <p>Challenge: fetch a Star Wars character and show their name and height.</p>
      <div className="work-area">Your fetched character will appear here.</div>
    </section>
  )
}
