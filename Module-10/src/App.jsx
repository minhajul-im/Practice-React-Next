import NewsFeed from "./page/NewsFeed";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
  return (
    <NewsProvider>
      <NewsFeed />
    </NewsProvider>
  );
}
