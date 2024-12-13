import { useState } from "react";
import { object, SizeType } from "./data/data";

type CartItem = {
  id: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
};

export default function App() {
  const [selection, setSelection] = useState({ color: "purple", size: "S" });
  const [count, setCount] = useState<number>(0);
  const [items, setItems] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { image, name, sizeWithPrice } = object[selection.color];
  const selectedSize =
    sizeWithPrice.find((item: SizeType) => item.size === selection.size) ||
    sizeWithPrice[0];

  const handleColorChange = (color: string) => {
    setSelection({ ...selection, color });
  };

  const handleSizeChange = (size: string) => {
    setSelection({ ...selection, size });
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAddToCart = () => {
    const newItem = {
      id: `${selection.color}-${selection.size}`,
      name,
      image,
      color: selection.color,
      size: selectedSize.size,
      price: selectedSize.discountPrice,
      quantity: count,
    };

    const existingItemIndex = items.findIndex(
      (item: CartItem) => item.id === newItem.id
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += count;
      setItems(updatedItems);
    } else {
      setItems([...items, newItem]);
    }

    setCount(0);
  };

  const handleRemoveFromCart = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main>
      <div className="flex gap-10 mt-10">
        <div className="w-[500px] h-[400px] relative">
          <img src={image} alt={name} className="absolute w-full h-full" />
        </div>
        <div className="border">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>
            <span>{selectedSize.regularPrice}</span>
            <span className="text-xl font-bold">
              {selectedSize.discountPrice}
            </span>
          </p>
          <div className="flex gap-3">
            <button
              className="py-2 px-6 rounded m-4 border"
              onClick={() => handleColorChange("purple")}>
              purple
            </button>
            <button
              className="py-2 px-6 rounded m-4 border"
              onClick={() => handleColorChange("blue")}>
              blue
            </button>
            <button
              className="py-2 px-6 rounded m-4 border"
              onClick={() => handleColorChange("cyan")}>
              cyan
            </button>
            <button
              className="py-2 px-6 rounded m-4 border"
              onClick={() => handleColorChange("black")}>
              black
            </button>
          </div>
          <div className="flex gap-3">
            {sizeWithPrice.map((item: SizeType) => (
              <button
                key={item.size}
                onClick={() => handleSizeChange(item.size)}
                className="py-2 px-6 rounded m-4 border">
                {item.size}
              </button>
            ))}
          </div>
          <div className="flex ms-4 ">
            <button onClick={increment} className="py-2 px-6 rounded border">
              +
            </button>
            <span className="py-2 px-6 rounded border select-none">
              {count}
            </span>
            <button onClick={decrement} className="py-2 px-6 rounded border">
              -
            </button>
            <button
              disabled={count === 0}
              onClick={handleAddToCart}
              className="py-2 px-6 rounded ms-6 border">
              add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {items.length > 0 && (
          <button
            onClick={handleCheckout}
            className="py-2 px-6 rounded ms-6 border bg-yellow-400">
            Checkout ({items.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Your Cart</h2>
            <button onClick={closeModal} className="text-red-400">
              close
            </button>
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  className="w-[80px] h-[80px]"
                  src={item.image}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>Color: {item.color}</p>
                <p>Size: {item.size}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
            <p>Total: ${totalPrice}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
