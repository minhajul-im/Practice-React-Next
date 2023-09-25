import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname.startsWith("/profile");
  if (path) {
    const token = request.cookies.get("next-auth.session-token");
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      console.log(token);
      return NextResponse.next();
    }
  }
};
