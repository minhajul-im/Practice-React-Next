import axiosInstance from "../../utils/axios";

const getTags = async () => {
  const tags = axiosInstance.get("/tags");
  return tags;
};

export default getTags;
