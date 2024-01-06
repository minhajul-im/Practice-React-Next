import Square from "./Square";
import { calculateWinner } from "../utilities/calculateWinner";

export default function Board({ squares, isNext, onPlayGame }) {
  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player: " + (isNext ? "X" : "O");
  }

  const handleOnClick = (i) => {
    if (squares[i] || winner) return;

    const nextSquare = squares.slice();
    if (isNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlayGame(nextSquare);
  };

  return (
    <div className='p-4 m-4 border border-gray-400 rounded'>
      <h2
        className={`text-gray-700 pb-4 font-semibold ms-1 ${
          winner && "text-green-700"
        }`}
      >
        {status} {winner && "🎉"}{" "}
      </h2>
      <div className='flex items-center'>
        <Square value={squares[0]} onSquareClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleOnClick(2)} />
      </div>
      <div className='flex items-center'>
        <Square value={squares[3]} onSquareClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleOnClick(5)} />
      </div>
      <div className='flex items-center'>
        <Square value={squares[6]} onSquareClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleOnClick(8)} />
      </div>
    </div>
  );
}
