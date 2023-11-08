const CartShimmer = () => {
  const ui = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section className="grid grid-cols-4 gap-6 my-12">
      {ui.map((item) => (
        <div
          key={item}
          className="w-[342px] h-[387px] bg-gray-100 rounded border"
        ></div>
      ))}
    </section>
  );
};

export default CartShimmer;
