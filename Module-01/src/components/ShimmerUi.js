import { useState } from "react";

const ShimmerUi = () => {
  const [simmer, _setSimmer] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  return (
    <div>
      <div className="products">
        {simmer.map((item) => (
          <div key={item} className="simmer"></div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUi;
