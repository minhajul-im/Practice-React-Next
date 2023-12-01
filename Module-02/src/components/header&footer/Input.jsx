export default function Input({ type, placeholder, inputValue }) {
  return (
    <input
      ref={inputValue}
      className="outline-none py-2 px-4 border border-gray-600 rounded w-full focus:border focus:border-white bg-gray-500"
      type={type}
      placeholder={placeholder}
    />
  );
}
