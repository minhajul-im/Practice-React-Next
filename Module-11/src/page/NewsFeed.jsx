import Header from "../components/header/Header";
import AllNews from "../components/news/AllNews";
import Footer from "../components/footer/Footer";
import NewsProvider from "../provider/NewsProvider";

export default function NewsFeed() {
  return (
    <NewsProvider>
      <Header></Header>
      <AllNews></AllNews>
      <Footer></Footer>
    </NewsProvider>
  );
}
