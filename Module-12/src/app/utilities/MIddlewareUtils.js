import { NextResponse } from "next/server";
import { VerifyJwtFunc } from "./JwtHelper";

export const checkAuthenticationByToken = async (req, _res) => {
  try {
    const token = req.cookies.get("token");

    const checkVerifyJwtByToken = await VerifyJwtFunc(token["value"]);

    const getRequestHeader = new Headers(req.headers);
    getRequestHeader.set("email", checkVerifyJwtByToken["email"]);

    return NextResponse.next({ request: { headers: getRequestHeader } });
  } catch (e) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
