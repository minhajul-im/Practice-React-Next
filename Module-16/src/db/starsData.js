import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

export const starList = async () => {
  const { followers, solved, customers, projects } = await getApiCalledFunc(
    "StatList"
  );

  const stars = [
    {
      id: 1,
      name: "Followers",
      img: "/Group.png",
      count: followers,
    },
    {
      id: 2,
      name: "Problems Solved",
      img: "/Like.png",
      count: solved,
    },
    {
      id: 3,
      name: "Happy Clients",
      img: "/Happy.png",
      count: customers,
    },
    {
      id: 4,
      name: "Projects",
      img: "/Scan.png",
      count: projects,
    },
  ];
  return stars;
};
