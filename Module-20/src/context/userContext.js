import { createContext } from "react";

const User = createContext({
  uid: "",
  email: "",
  displayName: "",
});

export default User;
