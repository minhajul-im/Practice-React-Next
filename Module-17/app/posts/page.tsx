import { posts, Post } from "#site/content";
import ShowPost from "@/components/post/show-post";
import { sortPosts } from "@/lib/utils";

const PostsPage = async () => {
  const sortPost = sortPosts(posts.filter((post: Post) => post.published));
  const displayPosts = posts;

  return (
    <main className="container p-4">
      <h1 className="text-4xl py-5 font-bold"> Posts page</h1>
      <p className="my-2 text-muted-foreground">
        Lorem ipsum dolor sit amet elit. Maiores consectetur harum mollitia sint
        dolore sunt.
      </p>
      <hr className="mt-6 border-b" />
      <div>
        {displayPosts.length > 0 ? (
          <section className="flex flex-col gap-6">
            {displayPosts.map((post: Post, idx: number) => (
              <ShowPost
                key={idx}
                slug={post?.slug}
                body={post?.body}
                date={post?.date}
                title={post?.title}
                published={post.published}
                description={post?.description}
              />
            ))}
          </section>
        ) : (
          <p className="text-foreground m-8 text-xl">No Posts Found!</p>
        )}
      </div>
    </main>
  );
};

export default PostsPage;
