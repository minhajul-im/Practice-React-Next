import { useState } from "react";
import { AuthorActionContext } from "../contexts";

// eslint-disable-next-line react/prop-types
const AuthorActionProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <AuthorActionContext.Provider value={{ show, setShow }}>
      {children}
    </AuthorActionContext.Provider>
  );
};

export default AuthorActionProvider;
