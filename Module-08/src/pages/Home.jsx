import Tags from "../components/home/Tags";
import Videos from "../components/home/Videos";
import Pagination from "../components/home/Pagination";
import { useContext } from "react";

export default function Home() {
  return (
    <>
      <Tags />
      <Videos />
      <Pagination />
    </>
  );
}
