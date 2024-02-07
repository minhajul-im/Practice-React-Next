import { createContext, useContext, useEffect, useState } from "react";

import { fetchApi } from "../utilities/fetchApi";
import { YOUTUBE_VIDEOES_API } from "../utilities/constant";

const VideoContext = createContext(null);
const VideoDispatchContext = createContext(null);

export const useVideoesContext = () => {
  return useContext(VideoContext);
};

export const useVideoesDispatchContext = () => {
  return useContext(VideoDispatchContext);
};

export default function VideoesProvider({ children }) {
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

  return (
    <VideoContext.Provider value={videoes}>
      <VideoDispatchContext.Provider value={setVideoes}>
        {children}
      </VideoDispatchContext.Provider>
    </VideoContext.Provider>
  );
}
