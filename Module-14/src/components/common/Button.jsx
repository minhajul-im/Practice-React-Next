const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
