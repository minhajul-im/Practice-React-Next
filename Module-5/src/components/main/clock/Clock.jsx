import { useState, useEffect } from "react";
import classes from "./Clock.module.css";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h3 className={classes.clock}>{clock.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clock;
