import { base_url } from "../../services";

// eslint-disable-next-line react/prop-types
const AvatarWithImg = ({ avatar }) => {
  return (
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">
      <img
        className="w-[40px] h-[40px] rounded-full"
        src={`${base_url}/uploads/avatar/${avatar}`}
        alt="user"
      />
    </div>
  );
};

export default AvatarWithImg;
