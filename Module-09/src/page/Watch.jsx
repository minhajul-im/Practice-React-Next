import { WATCH_URL } from "../utilities/constant";
import { useSearchParams } from "react-router-dom";

export default function Watch() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <iframe
        width='1216'
        height='685'
        src={WATCH_URL + searchParams.get("v")}
        title=''
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
}
