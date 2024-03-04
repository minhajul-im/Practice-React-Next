import { useReducer } from "react";

import { AuthorContext } from "../contexts";
import { AuthorReducer, initials } from "../reducers/AuthorReducer";

// eslint-disable-next-line react/prop-types
const AuthorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthorReducer, initials);

  return (
    <AuthorContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorProvider;
