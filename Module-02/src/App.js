import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";

const App = () => {
  return (
    <>
      <Header />
      {/* <Restaurant /> */}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
