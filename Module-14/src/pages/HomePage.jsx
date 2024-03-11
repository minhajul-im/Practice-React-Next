import FavoriteBlogs from "../components/author/FavoriteBlogs";
import AllBlogs from "../components/blogs/AllBlogs";
import MostPopular from "../components/blogs/MostPopular";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();

  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <AllBlogs />
          <div className="md:col-span-2 h-full w-full space-y-5">
            <MostPopular />
            {auth?.accessToken && <FavoriteBlogs />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
