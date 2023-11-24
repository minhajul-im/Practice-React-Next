import { useDispatch, useSelector } from "react-redux";
import { selectedTags, removedTags } from "../../features/filter/filterSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);

  const isSelected = tags.includes(title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white"
    : "bg-blue-100 text-blue-600";

  const handleSelectedTag = () => {
    if (isSelected) {
      dispatch(removedTags(title));
    } else {
      dispatch(selectedTags(title));
    }
  };

  return (
    <div
      onClick={handleSelectedTag}
      className={`px-4 py-1 rounded-full cursor-pointer ${style}`}
    >
      {title}
    </div>
  );
}
