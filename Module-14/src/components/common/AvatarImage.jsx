import React from "react";

import AvatarDemo from "../author/AvatarDemo";
import { useAuth } from "../../hooks/useAuth";
import { useAuthor } from "../../hooks/useAuthor";
import AvatarWithImg from "../author/AvatarWithImg";

// eslint-disable-next-line react/prop-types
const AvatarImage = ({ author, img }) => {
  const { auth } = useAuth();
  const { state } = useAuthor();
  const firstLetter = auth?.user?.firstName ?? author;
  const avatar = state?.author?.avatar ?? auth?.user?.avatar;
  console.log(firstLetter);

  return (
    <React.Fragment>
      {avatar ? (
        <AvatarWithImg avatar={avatar ?? img} />
      ) : (
        <AvatarDemo> {firstLetter && firstLetter.charAt(0)} </AvatarDemo>
      )}
    </React.Fragment>
  );
};

export default AvatarImage;
