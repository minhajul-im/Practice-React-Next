import { useState } from "react";

export default function Tag({ title }) {
  const [select, setSelect] = useState(false);

  let style = select ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600";

  const handleClickTag = () => {
    setSelect(!select);
  };

  return (
    <div
      onClick={handleClickTag}
      className={`${style} px-4 py-1 rounded-full cursor-pointer`}
    >
      {title}
    </div>
  );
}

// <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
//   redux
// </div>;
