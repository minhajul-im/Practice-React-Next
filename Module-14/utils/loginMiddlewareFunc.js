import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

/**
 * @param {any} req
 * @returns {NextResponse.json/next}
 */

export const loginMiddlewareFunc = async (req) => {
  try {
    const getDataFromLoginForm = await req.json();
    const loginEmail = getDataFromLoginForm["email"];
    const loginPassword = getDataFromLoginForm["password"];

    const header = new Headers(req.headers);
    const token = header.get("token");
    const Key = new TextEncoder().encode(process.env.JWT_TOKEN);
    const verifyToken = await jwtVerify(token, Key);

    // use for postman
    verifyToken["payload"]["email"];
    verifyToken["payload"]["password"];

    const checkEmailFromLoginForm = verifyToken["payload"][loginEmail];
    const checkPasswordFromLoginForm = verifyToken["payload"][loginPassword];
    console.log({ checkEmailFromLoginForm, checkPasswordFromLoginForm });

    return NextResponse.next();
  } catch (e) {
    return NextResponse.json(
      { message: "Unauthorized_Login" },
      { status: 401 }
    );
  }
};
