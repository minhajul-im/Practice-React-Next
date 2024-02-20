import { useAuth } from "../../hooks/useAuth";
import { base_url } from "../../services";
import AuthorActionBtn from "../common/AuthorActionBtn";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Blog = ({ children, blog }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleClickBlog = (e, id) => {
    e.stopPropagation();
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="my-6 space-y-4"
      onClick={(e) => handleClickBlog(e, blog?.id)}
    >
      <div className="blog-card relative">
        <img
          className="blog-thumb"
          src={`${base_url}/uploads/blog/${blog?.thumbnail}`}
          alt={blog?.title}
        />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">{blog?.title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            {blog?.content.slice(0, 145)}...
          </p>

          {children}
        </div>
        {auth?.accessToken && <AuthorActionBtn />}
      </div>
    </div>
  );
};

export default Blog;
