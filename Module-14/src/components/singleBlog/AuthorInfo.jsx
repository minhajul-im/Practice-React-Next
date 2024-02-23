import AvatarImage from "../common/AvatarImage";

const AuthorInfo = ({ author }) => {
  return (
    <div className="flex justify-center items-center my-4 gap-4">
      <div className="flex items-center capitalize space-x-2">
        <AvatarImage author={author?.firstName} img={author?.avatar} />
        <div className="avater-img bg-indigo-600 text-white">
          <span className="">S</span>
        </div>
        <h5 className="text-slate-500 text-sm">
          {author?.firstName + " " + author?.lastName}{" "}
        </h5>
      </div>
      <span className="text-sm text-slate-700 dot">June 28, 2018</span>
      <span className="text-sm text-slate-700 dot">100 Likes</span>
    </div>
  );
};

export default AuthorInfo;
