import { useContext } from "react";

import { Tags, AllVideos, Pagination } from "../components/index";
import ContextApi from "../utils/ContextApi";

export default function Home() {
  const { state } = useContext(ContextApi);
  // console.log(state);
  return (
    <>
      <Tags tags={state} />

      <AllVideos videos={state} />

      <Pagination />
    </>
  );
}
