import { useState } from 'react'
import ArrayDetective from './ArrayDetective.jsx'
import RandomSelector from './RandomSelector.jsx'
import StateUpdate from './StateUpdate.jsx'
import CombinedChallenge from './CombinedChallenge.jsx'

const challenges = [
  { title: '1 · Array Detective', Component: ArrayDetective },
  { title: '2 · Random Selector', Component: RandomSelector },
  { title: '3 · State Update', Component: StateUpdate },
  { title: '4 · Combined Challenge', Component: CombinedChallenge },
]

export default function Nov05Practice() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveChallenge = challenges[activeIndex].Component

  return (
    <section>
      <h2>Nov 5 — Independent React Drills</h2>
      <p>Practice from memory. Look up syntax, not full solutions.</p>
      <div className="form" role="group" aria-label="Choose a practice challenge">
        {challenges.map((challenge, index) => (
          <button
            key={challenge.title}
            type="button"
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {challenge.title}
          </button>
        ))}
      </div>
      <ActiveChallenge />
    </section>
  )
}
