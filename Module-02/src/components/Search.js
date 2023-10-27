const Search = ({ input, handleOnChange, handleOnClick }) => {
  return (
    <section className="my-8 text-end">
      <input
        value={input}
        onChange={handleOnChange}
        className="outline-none border border-r-0 rounded rounded-r-none border-amber-600 py-1
          px-2 text-amber-700 font-semibold"
        type="text"
      />
      <button
        onClick={handleOnClick}
        className="py-1 px-4 border rounded-l-none border-amber-600 text-white bg-amber-600 
        font-semibold rounded hover:bg-white hover:text-amber-600 duration-75"
      >
        Search
      </button>
    </section>
  );
};

export default Search;
