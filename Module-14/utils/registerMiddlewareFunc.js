import { jwtVerify } from "jose";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

/**
 * @param {any} req
 * @returns {NextResponse.json/next}
 */

export const registerMiddlewareFunc = async (req) => {
  try {
    const getDataFromUiHeader = headers();
    const registerEmail = getDataFromUiHeader.get("email");
    const registerPassword = getDataFromUiHeader.get("password");

    const header = new Headers(req.headers);
    const token = header.get("token");
    const Key = new TextEncoder().encode(process.env.JWT_TOKEN);
    const verifyToken = await jwtVerify(token, Key);

    //postman
    const email = verifyToken["payload"]["email"];
    const password = verifyToken["payload"]["password"];
    console.log({ email, password });

    const checkRegisterEmail = verifyToken["payload"][registerEmail];
    const checkRegisterPassword = verifyToken["payload"][registerPassword];
    console.log(checkRegisterEmail, checkRegisterPassword);

    header.set("email", email);
    header.set("password", password);

    return NextResponse.next({ request: { headers: header } });
  } catch (e) {
    return NextResponse.json(
      { message: "Unauthorized_Register" },
      { status: 401 }
    );
  }
};
