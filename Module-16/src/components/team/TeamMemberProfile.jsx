import Image from "next/image";
import SocialLinkForTeam from "./SocialLinkForTeam";
import teamMembersProfile from "@/utilities/teamMembersProfile";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TeamMemberProfile = async () => {
  const teams = await teamMembersProfile();

  return (
    <div className="flex justify-evenly py-20">
      {teams.splice(1, 3).map((member) => (
        <div key={member?.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              className="relative"
              src={member?.image}
              alt={member?.name}
              height={200}
              width={400}
            />
            <div className="absolute mt-60 py-2 px-4 rounded-full flex items-baseline bg-white gap-2">
              <SocialLinkForTeam url={member?.facebook} logo={faFacebook} />
              <SocialLinkForTeam url={member?.twitter} logo={faTwitter} />
              <SocialLinkForTeam url={member?.instagram} logo={faInstagram} />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{member?.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberProfile;
