import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isNext, setIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  const onPlayGame = (nextSquare) => {
    setIsNext(!isNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handleJumpTo = (move) => {
    setCurrentMove(move);
    setIsNext(move % 2 === 0);
  };

  const moves = history.map((_square, move) => {
    let description;
    if (move > 0) {
      description = `go to the move # ${move}`;
    } else {
      description = `go to play the game!`;
    }
    return (
      <li key={move} className='text-xs py-1'>
        <button onClick={() => handleJumpTo(move)} className='capitalize'>
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <h1 className='text-4xl font-bold text-purple-700 font-mono text-center py-4 mt-2 underline'>
        Tic Tac Toe!{" "}
      </h1>
      <div className='flex justify-center '>
        <Bord isNext={isNext} onPlayGame={onPlayGame} squares={currentSquare} />
        <ol className='border border-gray-400 p-4 m-4 rounded'>{moves}</ol>
      </div>
    </>
  );
}
