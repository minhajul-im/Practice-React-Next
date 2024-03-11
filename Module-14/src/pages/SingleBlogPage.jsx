import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { base_url } from "../services";
import AuthorInfo from "../components/singleBlog/AuthorInfo";
import Tags from "../components/singleBlog/Tags";
import Comments from "../components/singleBlog/Comments";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchingBlog = async () => {
      try {
        const res = await axios.get(`${base_url}/blogs/${id}`);

        if (res.status === 200) {
          setBlog(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchingBlog();
  }, [id]);

  if (blog === null) return <h1>Fetching blog......</h1>;

  console.log(blog);

  return (
    <div>
      <section>
        <div className="container text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">{blog?.title}</h1>
          <AuthorInfo author={blog?.author} />

          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src={`${base_url}/uploads/blog/${blog?.thumbnail}`}
            alt={blog?.title}
          />

          {blog?.tags && <Tags tags={blog?.tags} />}

          <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
            {blog?.content}
          </div>
        </div>
      </section>

      <Comments comments={blog?.comments} />
    </div>
  );
};

export default SingleBlogPage;
