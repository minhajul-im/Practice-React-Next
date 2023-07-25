import { Route, Routes } from "react-router-dom";
import Sopping from "./page/Income";
import Cart from "./page/Expense";
import Login from "./page/Login";
import Home from "./page/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopping" element={<Sopping />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
