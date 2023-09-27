import { getApiCalledFunc } from "./getApiCalledFunc";

const teamMembersProfile = async () => {
  const links = [
    "https://www.facebook.com/minhajul.im",
    "https://twitter.com/minhajul_im",
    "https://www.instagram.com/minhajul.im/",
  ];

  const teamData = await getApiCalledFunc("TeamList");
  const teams = teamData.map((item) => ({
    ...item,
    facebook: links.at(0),
    twitter: links.at(1),
    instagram: links.at(2),
  }));

  return teams;
};

export default teamMembersProfile;
