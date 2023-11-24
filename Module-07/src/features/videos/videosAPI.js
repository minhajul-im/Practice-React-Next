import axiosInstance from "../../utils/axios";

const getVideos = async ({ tags, search }) => {
  let query = "";

  if (tags?.length < 0) {
    query += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    query += `&q=${search}`;
  }
  const response = await axiosInstance.get(`/videos/?${query}`);
  return response.data;
};

export default getVideos;
