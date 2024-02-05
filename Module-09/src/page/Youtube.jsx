import { useEffect, useState } from "react";

import ButtonGroup from "../components/ButtonGroup";
import VideoesContainer from "../components/VideoesContainer";

import { fetchApi } from "../utilities/fetchApi";
import { YOUTUBE_VIDEOES_API } from "../utilities/constant";

export default function Youtube() {
  const [videoes, setVideoes] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchVideoes = async () => {
      const result = await fetchApi(YOUTUBE_VIDEOES_API);
      if (!ignore) {
        setVideoes(result?.items);
      }
    };
    fetchVideoes();

    return () => {
      ignore = true;
    };
  }, []);

  console.log(videoes[0]);

  return (
    <section>
      <ButtonGroup />

      <VideoesContainer videoInfo={videoes[0]}></VideoesContainer>
    </section>
  );
}
