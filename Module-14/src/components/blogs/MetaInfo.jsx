import { useNavigate } from "react-router-dom";
import AvatarImage from "../common/AvatarImage";
import { formatDate } from "../../utils/formatDate";

// eslint-disable-next-line react/prop-types
const MetaInfo = ({ author, likes, time }) => {
  const navigate = useNavigate();

  const handleAuthor = (e) => {
    e.stopPropagation();
    navigate("/author");
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <div>
          <AvatarImage
            author={author?.firstName || author?.lastName}
            img={null}
          />
        </div>

        <div>
          <button onClick={handleAuthor}>
            <h5 className="text-slate-500 text-sm">
              {author?.firstName + " " + author?.lastName}
            </h5>
          </button>
          <div className="flex items-center text-xs text-slate-700">
            <span>{formatDate(time)}</span>
          </div>
        </div>
      </div>

      <div className="text-sm px-2 py-1 text-slate-700">
        <span> {likes > 0 ? `${likes} Likes` : null}</span>
      </div>
    </div>
  );
};

export default MetaInfo;
