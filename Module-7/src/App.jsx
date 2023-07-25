import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Income from "./page/Income";
import Expense from "./page/Expense";
import Login from "./page/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
