import { Programming as Post } from "#site/content";

export const fetchPosts = async (type: string | null): Promise<Post[]> => {
  try {
    const query = type ? `?type=${type}` : "";
    const res = await fetch(`http://localhost:3000/api/posts${query}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
