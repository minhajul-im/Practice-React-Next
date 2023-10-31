import React, { useEffect } from "react";

const FunctionComp = () => {
  useEffect(() => {
    const times = setInterval(() => {
      console.log("function interval Func component");
    }, 1000);
    return () => {
      clearInterval(times);
    };
  }, []);

  return <div>FunctionComp</div>;
};

export default FunctionComp;
