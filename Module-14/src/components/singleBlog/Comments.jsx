import AvatarImage from "../common/AvatarImage";
import Comment from "./Comment";
import WriteComment from "./WriteComment";

const Comments = ({ comments }) => {
  console.log(comments);

  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">
          Comments ({comments.length})
        </h2>
        <div className="flex items -center space-x-4">
          <AvatarImage author={null} img={null} />

          <WriteComment />
        </div>

        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment?.id} comment={comment} />
          ))}
      </div>
    </section>
  );
};

export default Comments;
