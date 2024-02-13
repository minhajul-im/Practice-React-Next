import Header from "../components/header/Header";
import LatestNews from "../components/news/LatestNews";
import PopularNews from "../components/news/PopularNews";
import Footer from "../components/footer/Footer";
import LinkedInSearchBar from "../components/LinkedInSearchBar";

export default function NewsFeed() {
  return (
    <>
      {/* <LinkedInSearchBar /> */}
      <Header></Header>
      <main className='my-10 lg:my-14'>
        <div className='container mx-auto grid grid-cols-12 gap-8'>
          <LatestNews></LatestNews>
          <PopularNews></PopularNews>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
