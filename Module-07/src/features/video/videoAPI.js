import instanceAxios from "../../utils/axios";

const getVideo = async (id) => {
  const video = await instanceAxios.get(`/videos/${id}`);
  return video.data;
};

export default getVideo;
