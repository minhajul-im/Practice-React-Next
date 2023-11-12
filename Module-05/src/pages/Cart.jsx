import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cartItems/CartItem";
import { clearCart } from "../redux/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartFood.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section>
      <h1 className=" text-center font-bold text-3xl py-6 text-gray-700">
        This is your Cart List!
      </h1>

      {cartItems.length === 0 ? (
        <h1 className="text-gray-800 font-bold text-2xl text-center my-10 py-10">
          Please add some food in your Card!😋😋😋😋
        </h1>
      ) : (
        <div>
          <h6 className="text-end mr-[365px] my-4">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 rounded bg-red-600 text-white font-semibold capitalize"
            >
              ❎ clear cart
            </button>
          </h6>

          {cartItems.map((item) => (
            <CartItem key={item?.card?.info?.id} info={item?.card?.info} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;
