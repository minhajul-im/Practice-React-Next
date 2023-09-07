import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const getDataFromHeader = headers();
  const emailFromUI = getDataFromHeader.get("email");
  const passwordFromUI = getDataFromHeader.get("password");
  console.log({ emailFromUI, passwordFromUI });

  const header = new Headers(req.headers);
  const email = header.get("email");
  const password = header.get("password");

  return NextResponse.json(
    { message: "Successful", email: email, password: password },
    { status: 200 }
  );
};
