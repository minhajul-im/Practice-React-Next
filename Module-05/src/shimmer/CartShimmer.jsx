const CartShimmer = () => {
  const ui = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <main>
      <div className="my-10 flex justify-end">
        <h1 className="w-[300px] h-[40px] rounded bg-gray-100"></h1>
      </div>
      <section className="grid grid-cols-4 gap-6">
        {ui.map((item) => (
          <div
            key={item}
            className="w-[342px] h-[387px] bg-gray-100 rounded-none border"
          ></div>
        ))}
      </section>
    </main>
  );
};

export default CartShimmer;
