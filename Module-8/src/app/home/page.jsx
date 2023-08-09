"use client";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const times = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(times);
    };
  }, [time]);

  // Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt temporibus eum odio magni saepe est exercitationem maxime aliquam iure dolorem, molestiae laborum molestias veniam quia quisquam praesentium fugit corrupti minus?

  const data = (init) => (init.toString().length === 1 ? `0${init}` : init);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <h1>
        {data(time.getDay())}/ {data(time.getMonth())} /
        {data(time.getFullYear())}
      </h1>
    </div>
  );
};

export default Home;
