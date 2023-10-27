import { Link } from "react-router-dom";
import { SWIGGY_IMG } from "../utils/allLinks";

const Food = ({ resData }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {resData.slice(0, 8).map((item) => (
        <Link to={`/restaurant/${item?.info?.id}`} key={item?.info?.id}>
          <div className="rounded-2xl w-[331px] hover:shadow-md">
            <img
              className="h-[220px] w-[330px] rounded-lg"
              src={SWIGGY_IMG + item?.info?.cloudinaryImageId}
              alt="x"
            />
            <div className="py-4 flex flex-col gap-2">
              <h5 className="text-[18px] font-bold ">
                {item?.info?.costForTwo}
              </h5>
              <h5 className="text-[18px] font-semibold ">{item?.info?.name}</h5>
              <div className="font-semibold text-[16px] flex gap-2 flex-row">
                <span>✩</span>
                <span> {item?.info?.avgRating}</span>•
                <span> {item?.info?.sla?.slaString} </span>
              </div>
              <p className="text-gray-500">{item?.info?.cuisines.join(", ")}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Food;
