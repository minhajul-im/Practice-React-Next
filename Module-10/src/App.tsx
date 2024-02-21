import Products from "./components/Products";
import ProductAdd from "./components/ProductAdd";
import ProductDetails from "./components/ProductDetails";
import ProductContextProvider from "./context/useContext";

const App = () => {
  return (
    <ProductContextProvider>
      <div className="flex">
        <ProductAdd />
        <Products />
        <ProductDetails />
      </div>
    </ProductContextProvider>
  );
};

export default App;
