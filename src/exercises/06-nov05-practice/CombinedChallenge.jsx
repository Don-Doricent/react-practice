import { useState } from 'react'

// CHALLENGE 4 — Movie Night (20–30+ minutes, optional stretch)
// Concepts: arrays, random indexing, useState, click handlers, props.
// Stretch: .map() and immutable updates to objects inside arrays.

const startingMovies = [
  { id: 1, title: 'The Hidden Planet', genre: 'Sci-fi', favorite: false },
  { id: 2, title: 'Midnight Trail', genre: 'Mystery', favorite: false },
  { id: 3, title: 'Beyond the Reef', genre: 'Adventure', favorite: false },
]

function MovieCard({ movie }) {
  // TODO 3: Use the movie prop to display title and genre.
  // Use optional chaining or a conditional to handle no selection yet.
  return <div className="work-area">Your selected movie will appear here.</div>
}

export default function CombinedChallenge() {
  const [movies, setMovies] = useState(startingMovies)
  const [selectedMovie, setSelectedMovie] = useState(null)

  function chooseMovie() {
    // TODO 1: Choose a random movie object from movies.
    // TODO 2: Update selectedMovie so MovieCard receives it as a prop.
  }

  function toggleFavorite() {
    // STRETCH 1: If a movie is selected, update only that movie's
    // favorite property inside the movies state array (without mutation).
    // STRETCH 2: Keep selectedMovie in sync with the updated favorite status.
    // Hint topics to look up: array.map, object spread, functional updates.
  }

  return (
    <section>
      <h2>4. Movie Night Picker</h2>
      <p>Combine random selection, state, event handlers, and a child component.</p>
      <button type="button" onClick={chooseMovie}>Surprise me</button>{' '}
      <button type="button" onClick={toggleFavorite} disabled={!selectedMovie}>
        Toggle favorite (stretch)
      </button>
      <MovieCard movie={selectedMovie} />
    </section>
  )
}
