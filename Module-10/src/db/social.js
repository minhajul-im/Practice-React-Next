import { getID } from "./links";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const icons = [
  {
    id: getID.next().value,
    name: faGlobe,
    link: "https://www.minhajul.com/",
  },
  {
    id: getID.next().value,
    name: faLinkedinIn,
    link: "https://www.linkedin.com/in/minhajul-im/",
  },
  {
    id: getID.next().value,
    name: faGithub,
    link: "https://github.com/minhajul-im",
  },
  {
    id: getID.next().value,
    name: faFacebook,
    link: "https://www.facebook.com/minhajul.im",
  },
  {
    id: getID.next().value,
    name: faTwitter,
    link: "https://twitter.com/minhajul_im",
  },
  {
    id: getID.next().value,
    name: faInstagram,
    link: "https://www.instagram.com/minhajul.im/",
  },
];

export default icons;
