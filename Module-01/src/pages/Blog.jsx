import React from "react";

import {
  BackHome,
  BlogPost,
  RelatedBlogs,
} from "../components/BlogRelated/index";

export default function Blog() {
  return (
    <>
      <BackHome />
      <section className="post-page-container">
        <BlogPost />

        <RelatedBlogs />
      </section>
    </>
  );
}
