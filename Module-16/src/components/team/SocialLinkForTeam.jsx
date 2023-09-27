import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinkForTeam = ({ url, logo }) => {
  return (
    <a target="_blank" href={url}>
      <FontAwesomeIcon className="p-1 shadow-md text-[1rem]" icon={logo} />
    </a>
  );
};

export default SocialLinkForTeam;
