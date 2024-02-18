import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";
import TopLeftSideNews from "./TopLeftSideNews";
import TopRightSideNews from "./TopRightSideNews";
import LeftSideNewsWithImg from "./LeftSideNewsWithImg";
import { useNewsContext } from "../../hooks/useNewsContext";

export default function AllNews() {
  const { newsData } = useNewsContext();

  if (!newsData || newsData.articles.length === 0) {
    return <p>Fetching............</p>;
  }

  const [topLeftSideNewsData, ...remainingNews] = newsData.articles;
  const [leftSideNewsWithImgData, ...remainingNewsOne] = remainingNews;
  const [rightSideNewsWithImgData, ...remainingNewsTwo] = remainingNewsOne;

  const extra = Math.round(remainingNewsTwo.length / 3);

  const leftSingleNewsItems = remainingNewsTwo.slice(0, extra * 2);
  const rightSingleNewsItems = remainingNewsTwo.slice(extra * 2);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* <!-- left --> */}
        <LeftSideNews newsItems={leftSingleNewsItems}>
          <TopLeftSideNews newsInfo={topLeftSideNewsData} />
          <LeftSideNewsWithImg newsInfo={leftSideNewsWithImgData} />
        </LeftSideNews>

        {/* <!-- right --> */}
        <RightSideNews newItems={rightSingleNewsItems}>
          <TopRightSideNews newsInfo={rightSideNewsWithImgData} />
        </RightSideNews>
      </div>
    </main>
  );
}
