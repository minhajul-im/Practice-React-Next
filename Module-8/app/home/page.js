"use client";

import { useState, useEffect } from "react";

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

  const date = (getDate) =>
    getDate.toString().length === 1 ? `0${getDate}` : getDate;

  return (
    <div className="flex justify-center flex-col items-center h-screen gap-2">
      <h1 className="text-5xl text-center text-white font-bold">
        {time.toLocaleTimeString()}
      </h1>
      <p className="text-center text-white text-2xl space-x-1">
        {date(time.getDay())} / {date(time.getMonth())} / {time.getFullYear()}
      </p>
    </div>
  );
};

export default Home;
