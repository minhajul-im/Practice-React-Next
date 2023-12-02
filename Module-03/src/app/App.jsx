import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Application";
import appStore from "./store";

export default function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
