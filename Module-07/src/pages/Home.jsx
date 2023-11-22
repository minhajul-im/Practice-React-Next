import { useEffect } from "react";
import VideoItems from "../components/homeVideos/VideoItems";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <VideoItems />
    </>
  );
}
