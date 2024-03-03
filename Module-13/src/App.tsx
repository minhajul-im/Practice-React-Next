import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Products from "./components/Products";

const queyClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queyClient}>
      <div>
        <Products />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
