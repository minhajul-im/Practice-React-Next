import axios from "axios";
import { useEffect, useState } from "react";
export interface Post {
  id: string;
  title: string;
  comment: string;
}

export function useDataFetching(url: string) {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/${url}`);
        if (res.data) {
          setPosts(res.data);
        }
      } catch (err: any) {
        if (err.response) {
          setError(
            `Axios Error: ${err.message}, Status: ${err.response?.status}`
          );
        } else {
          setError(`Error: ${err.message}`);
        }
      }
    };
    fetchingData();
  }, [url]);

  return { posts, error, setPosts };
}
