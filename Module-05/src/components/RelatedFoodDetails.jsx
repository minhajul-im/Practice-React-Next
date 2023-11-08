import RelatedFoodItem from "./RelatedFoodItem";
import useCollapseAndExpand from "../hooks/useCollapseAndExpand";

const RelatedFoodDetails = ({ items }) => {
  const { handleOnClick, collapseAndExpand } = useCollapseAndExpand();

  return (
    <section className="mx-6">
      <div className="text-2xl font-bold text-amber-600 flex justify-between items-center my-5 mx-6">
        <h1>
          {items?.card?.card?.title} ({items?.card?.card?.itemCards.length})
        </h1>
        <h6 className="cursor-pointer" onClick={handleOnClick}>
          {collapseAndExpand ? "▲" : "▼"}
        </h6>
      </div>
      <hr className="border py-2 bg-gray-200 border-gray-200" />
      {collapseAndExpand && <RelatedFoodItem items={items} />}
    </section>
  );
};

export default RelatedFoodDetails;
