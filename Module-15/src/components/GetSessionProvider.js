"use client";
import { SessionProvider } from "next-auth/react";
const GetSessionProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default GetSessionProvider;
