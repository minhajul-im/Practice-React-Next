import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const getJsonDataFromBody = await req.json();

  const name = getJsonDataFromBody["name"];
  const email = getJsonDataFromBody["email"];
  const password = getJsonDataFromBody["password"];

  // console.log({ name, email, password });

  if (email) {
    const payload = { email: email, password: password };

    const Key = new TextEncoder().encode(process.env.JWT_TOKEN);

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("http://localhost:3000")
      .setExpirationTime("24h")
      .sign(Key);

    return NextResponse.json(
      { token: token, message: "Register Successful" },
      { status: 201 }
    );
  } else {
    return NextResponse.json({ message: "Register Failed" }, { status: 401 });
  }
};
