import axios from "axios";
import { useEffect, useRef, useState } from "react";

import BlogList from "./BlogList";
import { base_url } from "../../services";

const perPage = 5;

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchingBlog = async () => {
      try {
        const res = await axios.get(
          `${base_url}/blogs?limit=${perPage}&skip=${page * perPage}`
        );

        if (res.data.blogs === 0) {
          setHasMore(false);
        } else {
          setBlogs((prevBlogs) => [...prevBlogs, ...res.data.blogs]);
          setPage((prev) => prev + 1);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchingBlog();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div className="space-y-3 md:col-span-5">
      <BlogList blogs={blogs} />

      {hasMore && <div ref={loaderRef}>Fetching Blogs.... </div>}
    </div>
  );
};

export default AllBlogs;
