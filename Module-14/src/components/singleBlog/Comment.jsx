import AvatarImage from "../common/AvatarImage";

// eslint-disable-next-line react/prop-types
const Comment = ({ comment }) => {
  console.log(comment?.author?.firstName);

  return (
    <div className="flex items-start space-x-4 my-8">
      <AvatarImage
        author={comment?.author?.firstName}
        img={comment?.author?.avatar}
      />

      <div className="w-full">
        <h5 className="text-slate -500 font-bold">
          {comment?.author?.firstName + " " + comment?.author?.lastName}
        </h5>
        <p className="text-slate-300">{comment?.content}</p>
      </div>
    </div>
  );
};

export default Comment;
