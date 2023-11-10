const Item = ({ index }) => {
  return (
    <h5 style={{ textAlign: "center", backgroundColor: "aqua", color: "red" }}>
      Item {"->"} {index}
    </h5>
  );
};

export default Item;
