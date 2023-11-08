const TopCartMenu = (CardMenu) => {
  return ({ item }) => {
    return (
      <section>
        <label className="absolute bg-amber-600 text-white px-2 py-1 rounded font-mono font-semibold rotate-[-45deg] mt-7">
          Top Food
        </label>
        <CardMenu item={item} />
      </section>
    );
  };
};

export default TopCartMenu;
