import React from "react";
import { SinglePost, AsideSection } from "../components/homeRelated/index";

export default function Home() {
  return (
    <section className="wrapper">
      <AsideSection />

      <main className="post-container" id="lws-postContainer">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </main>
    </section>
  );
}
