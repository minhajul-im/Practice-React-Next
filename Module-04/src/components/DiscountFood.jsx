const DiscountFood = (CardFood) => {
  return ({ item }) => {
    return (
      <section>
        <label className="text-white bg-amber-600 py-1 px-2 text-[12px] font-semibold  rounded absolute">
          5% discount!
        </label>
        <CardFood item={item} />
      </section>
    );
  };
};

export default DiscountFood;
