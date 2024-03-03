import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthorPage from "./pages/AuthorPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/common/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/common/Header";
import PrivateRoutes from "./routes/PrivetRoutes";
import SingleBlogPage from "./pages/SingleBlogPage";
import AuthorActionProvider from "./providers/AuthorActionProvider";

const App = () => {
  return (
    <AuthorActionProvider>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />

        <Route element={<PrivateRoutes />}>
          <Route element={<AuthorPage />} path="/author" />
        </Route>

        <Route element={<SingleBlogPage />} path="/blog/:id" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
      <Footer />
    </AuthorActionProvider>
  );
};

export default App;
