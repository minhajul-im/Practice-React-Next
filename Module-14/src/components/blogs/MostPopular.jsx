import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { base_url } from "../../services";

const MostPopular = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingBlog = async () => {
      try {
        const res = await axios.get(`${base_url}/blogs/popular`);
        if (res.status === 200) {
          setBlogs(res.data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchingBlog();
  }, []);

  const handleClickBlog = (e, id) => {
    e.stopPropagation();
    navigate(`/blog/${id}`);
  };

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {blogs.map((blog) => (
          <li key={blog?.id} onClick={(e) => handleClickBlog(e, blog?.id)}>
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
            <p className="text-slate-600 text-sm">
              by{" "}
              <Link to={"/author"}>
                {blog?.author?.firstName + " " + blog?.author?.lastName}
              </Link>
              <span>·</span> {blog?.likes.length}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopular;
