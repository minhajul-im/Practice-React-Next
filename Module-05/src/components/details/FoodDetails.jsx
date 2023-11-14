const FoodDetails = ({ foodDetails }) => {
  const {
    sla,
    name,
    cuisines,
    areaName,
    avgRating,
    feeDetails,
    costForTwoMessage,
    totalRatingsString,
  } = foodDetails?.card?.card?.info;

  return (
    <section className="my-10 mx-6">
      <div className="flex justify-between items-center py-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h3 className="text-2x font-bold text-gray-700">
            {costForTwoMessage}
          </h3>
          <div className="text-gray-500">
            <p>{cuisines.join(", ")}</p>
            <span>{areaName}</span> &nbsp;
            <span>{sla?.lastMileTravelString}</span>
          </div>
        </div>
        <div className="border border-gray-200 rounded p-2 text-center">
          <h6 className="text-green-600 font-bold py-2">
            ★&nbsp;&nbsp;{avgRating}
          </h6>
          <hr className="px-2" />
          <p className="font-semibold tracking-tight text-gray-400 py-2">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <p className="text-gray-500 pb-8"> {feeDetails?.message}</p>

      <hr className="border-b border-gray-400 border-dotted" />
    </section>
  );
};

export default FoodDetails;
