"use client";

import { useEffect, useState } from "react";

const clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const times = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(times);
    };
  }, [time]);

  const data = (init) => (init.toString().length === 1 ? `0${init}` : init);

  return {
    times: time.toLocaleTimeString(),
    day: data(time.getDay()),
    month: data(time.getMonth()),
    year: time.getFullYear(),
  };
};

export default clock;
