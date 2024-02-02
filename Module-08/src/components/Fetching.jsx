import { useEffect, useState } from "react";

export default function Fetching({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let x = true;

    if (x) {
      console.log("yes");
    }

    return () => {
      x = false;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    const startFetching = async () => {
      const json = await fetchingComments(postId);
      if (!ignore) {
        setComments(json);
      }
    };

    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}> {comment.name}</li>
      ))}
    </ul>
  );
}

const fetchingComments = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return res.json();
};
