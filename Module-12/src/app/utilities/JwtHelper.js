import { SignJWT, jwtVerify } from "jose";

export const SignInJwtFunc = async (email) => {
  const secretJwt = new TextEncoder().encode(process.env.JWT_SECRET);

  const tokenJwt = await SignJWT({ email: email })
    .setProtectedHeader({ alg: HS256 })
    .setIssueAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secretJwt);

  return tokenJwt;
};

export const VerifyJwtFunc = async (tokenJwt) => {
  const secretJwt = new TextEncoder().encode(process.env.JWT_SECRET);

  const decoded = await jwtVerify(tokenJwt, secretJwt);

  return decoded["payload"];
};
