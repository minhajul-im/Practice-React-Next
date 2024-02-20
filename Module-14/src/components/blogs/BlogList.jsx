import Blog from "./Blog";
import MetaInfo from "./MetaInfo";

// eslint-disable-next-line react/prop-types
const BlogList = ({ blogs }) => {
  return (
    <div>
      {/*eslint-disable-next-line react/prop-types */}
      {blogs.map((blog) => (
        <Blog key={blog?.id} blog={blog}>
          <MetaInfo
            author={blog?.author}
            time={blog?.createdAt}
            likes={blog?.likes?.length}
          />
        </Blog>
      ))}
    </div>
  );
};

export default BlogList;
