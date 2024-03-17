const Child = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Child form Bubbling!");
  };
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Event bubbling</h1>
      <button
        onClick={handleClick}
        className="py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        bubble
      </button>
    </div>
  );
};

export default Child;
