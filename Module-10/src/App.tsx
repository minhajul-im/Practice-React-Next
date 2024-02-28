import Products from "./components/Products";
import ProductAdd from "./components/ProductAdd";
import ProductContextProvider from "./context/ProductContext";
import ProductDetailsShow from "./components/ProductDetailsShow";

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
