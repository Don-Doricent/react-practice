/**
 * Challenge: Practice React Props
 *
 * 1. Create a Player component in Player.jsx.
 *
 * 2. The component should accept three props:
 *    - name (string)
 *    - team (string)
 *    - points (number)
 *
 * 3. Render the player's name, team, and points
 *    inside a div.
 *
 * 4. Export the Player component.
 *
 * 5. Import Player into App.jsx.
 *
 * 6. Render three instances of the Player component
 *    using the following data:
 *
 *    Shai Gilgeous-Alexander | OKC | 32
 *    Jayson Tatum           | BOS | 28
 *    Cade Cunningham       | DET | 26
 *
 * BONUS:
 * - Use destructuring instead of props.name,
 *   props.team, and props.points.
 *
 * RULES:
 * - No tutorials
 * - No CSS required.
 * - Complete within 10 minutes.
 *
 * OBJECTIVE:
 * Practice creating reusable components, passing
 * props, accessing props, and rendering dynamic data.
 */

export default function Player(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.team}</p>
      <p>{props.points}</p>
    </div>
  );
}
