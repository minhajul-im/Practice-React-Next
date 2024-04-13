import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="p-20 bg-purple-600">
      <h1 className="text-4xl font-bold">
        hello this the only about page intercepting page
      </h1>
      <h1>this the about page it is a higher level page like top page </h1>
      <h2>
        i wanna intercepting this page when user browsing that time click the
        about page, that time i wanna see to this style and when he send about
        page link anyone that time anyone come to visit that i wanna see to
        another style like this!
      </h2>
      <Link href={"/intercepting"} className="text-blue-600 underline">
        go to intercepting page
      </Link>
    </div>
  );
};

export default AboutPage;
