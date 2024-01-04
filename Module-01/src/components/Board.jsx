import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];

    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return squares[x];
    }
  }
  return null;
};

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
