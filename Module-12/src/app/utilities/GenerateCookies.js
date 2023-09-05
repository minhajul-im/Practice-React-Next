import { SignInJwtFunc } from "./JwtHelper";

export const generateCookiesFunc = async (email) => {
  const token = await SignInJwtFunc(email);

  return {
    "Set-Cookie": `token=${token}; Max-Age=7200; Source=httpOnly; Path=/; SameSite=Strict`,
  };
};
