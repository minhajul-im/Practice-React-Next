import Header from "../components/header/Header";
import AllNews from "../components/news/AllNews";
import Footer from "../components/footer/Footer";
import NewsProvider from "../provider/NewsProvider";
import { useThemeContext } from "../hooks/useThemeContext";

export default function NewsFeed() {
  const { darkMode } = useThemeContext();
  return (
    <NewsProvider>
      <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
        <Header></Header>
        <AllNews></AllNews>
        <Footer></Footer>
      </div>
    </NewsProvider>
  );
}
