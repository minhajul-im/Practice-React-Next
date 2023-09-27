import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

export const worksIconFunc = async () => {
  const works = await getApiCalledFunc("WorkList");
  const images = ["/Activity.png", "/Heart.png", "/Work.png"];

  const workLists = works.map((item, i) => ({
    ...item,
    img: images[i],
    arrow: "/Arrow.png",
  }));

  return workLists;
};
