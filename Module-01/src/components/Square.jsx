export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className='h-8 w-8 rounded border border-gray-500 m-1 p-1 font-bold text-xl leading-6'
    >
      {value}
    </button>
  );
}
