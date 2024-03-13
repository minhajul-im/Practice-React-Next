import React from "react";
import { useAuthor } from "../../hooks/useAuthor";
import BlogList from "../blogs/BlogList";

const MyBlogs = () => {
  const { state } = useAuthor();
  const blogs = state?.author?.blogs;

  return (
    <React.Fragment>
      {blogs.length > 0 ? (
        <div>
          <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
          <BlogList blogs={blogs} />
        </div>
      ) : (
        <h2> You have no Blog!</h2>
      )}
    </React.Fragment>
  );
};

export default MyBlogs;
