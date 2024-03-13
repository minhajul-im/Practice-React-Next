import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { base_url } from "../../services";
import { useAuth } from "../../hooks/useAuth";

const FavoriteBlogs = () => {
  const { auth } = useAuth();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchingBlog = async () => {
      try {
        const res = await axios.get(`${base_url}/blogs/favourites`, {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
        });
        console.log(res);

        if (res.status === 200) {
          setBlogs(res.data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchingBlog();
  }, []);

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={`blog/${blog?.id}`} key={blog?.id}>
              <li>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  {blog?.title}
                </h3>
                <p className="text-slate-600 text-sm">{blog?.tags}</p>
              </li>
            </Link>
          ))
        ) : (
          <h2>You can add favorite</h2>
        )}
      </ul>
    </div>
  );
};

export default FavoriteBlogs;
