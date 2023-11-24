import axiosInstance from "../../utils/axios";

const getRelatedVideos = async ({ tags, id }) => {
  const limits = 5;
  let queryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limits}`
      : `&id_ne${id}&_limit=${limits}`;

  const relatedVideos = await axiosInstance.get(`videos?${queryString}`);

  return relatedVideos;
};

export default getRelatedVideos;
