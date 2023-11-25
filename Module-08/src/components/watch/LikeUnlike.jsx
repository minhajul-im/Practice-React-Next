import likeImg from "../../assets/like.svg";
import unlikeImg from "../../assets/unlike.svg";

export default function LikeUnlike({ like, unlike }) {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={likeImg} alt="Like" />
        </div>
        <div className="text-sm font-bold leading-[1.7142857] text-slate-600">
          {like > 0 ? like : 2.2}K
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={unlikeImg} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlike}
        </div>
      </div>
    </div>
  );
}
