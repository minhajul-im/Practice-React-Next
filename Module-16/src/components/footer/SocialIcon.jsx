import iconsAndLinks from "@/db/iconsData";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = () => {
  return (
    <div>
      {iconsAndLinks.map((item) => (
        <a
          className="hover:text-purple-600"
          key={item.id}
          href={item.link}
          target="_blank"
        >
          <FontAwesomeIcon
            className="bg-green-500 p-3 rounded-full mx-1 text-[1rem]"
            icon={item.name}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;
