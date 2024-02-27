import Products from "./components/Products";
import ProductAdd from "./components/ProductAdd";
import ProductDetailsShow from "./components/ProductDetailsShow";
import ProductContextProvider from "./context/ProductContext";

const App = () => {
  return (
    <ProductContextProvider>
      <div className="flex">
        <ProductAdd />
        <Products />
        <ProductDetailsShow />
      </div>
    </ProductContextProvider>
  );
};

export default App;
