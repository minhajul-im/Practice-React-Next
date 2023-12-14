import { useState } from "react";

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA && <Counter person={"John"} />}
      {!isPlayerA && <Counter person={"jui"} />}

      {isPlayerA ? (
        <Counter person='Taylor' />
      ) : (
        <section>
          <Counter person='Sarah' />
        </section>
      )}

      {isPlayerA ? (
        <Counter key={"teylor"} person='Nocky' />
      ) : (
        <Counter key={"sarah"} person='Sock' />
      )}

      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
