import React from "react";

const HeaderDownTitleSection = ({ category, title }) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="uppercase text-sm text-green-500">{category}</h4>
      <h1 className="text-2xl font-bold capitalize pb-4">{title}</h1>
    </div>
  );
};

export default HeaderDownTitleSection;
