export default function Button({ children, color, onButton }) {
  return (
    <button
      onClick={onButton}
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold ${color}`}
    >
      {children}
    </button>
  );
}
