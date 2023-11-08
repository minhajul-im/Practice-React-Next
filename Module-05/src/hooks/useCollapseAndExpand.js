import { useState } from "react";

const useCollapseAndExpand = () => {
  const [collapseAndExpand, setCollapseAndExpand] = useState(false);

  const handleOnClick = () => {
    setCollapseAndExpand(!collapseAndExpand);
  };

  return {
    collapseAndExpand,
    handleOnClick,
  };
};

export default useCollapseAndExpand;
