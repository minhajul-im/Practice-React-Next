import { useContext } from "react";

import { AuthorActionContext } from "../contexts";

export const useAuthorAction = () => {
  return useContext(AuthorActionContext);
};
