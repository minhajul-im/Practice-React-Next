import NewsFeed from "./page/NewsFeed";
import ThemeProvider from "./provider/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <NewsFeed />
    </ThemeProvider>
  );
}
