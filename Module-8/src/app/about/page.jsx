"use client";

import { useSearchParams } from "next/navigation";

const About = () => {
  const path = useSearchParams();

  return (
    <div>
      <h1>Hello About</h1>
      <h1>{path.get("name")}</h1>
    </div>
  );
};

export default About;
