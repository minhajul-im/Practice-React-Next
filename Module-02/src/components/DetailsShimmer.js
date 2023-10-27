const DetailsShimmer = () => {
  return (
    <div className="my-12 w-4/6 mx-auto">
      <div className="flex justify-between">
        <div>
          <div className="h-8 w-[330px] rounded bg-gray-200 py-4 my-4"></div>
          <div className="h-8 w-[230px] rounded bg-gray-200 py-4 my-4"></div>
          <div className="h-8 w-[230px] rounded bg-gray-200 py-4 my-4"></div>
          <div className="h-8 w-[430px] rounded bg-gray-200 py-4 my-4"></div>
        </div>

        <div className="w-[100px] h-[100px] bg-gray-200 shadow-md p-4 rounded-md"></div>
      </div>
      <p className="h-[1px] bg-gray-500 underline decoration-dashed my-8"></p>
    </div>
  );
};

export default DetailsShimmer;
