import { NextResponse } from "next/server";

export const middleware = (req, _res) => {
  if (req.nextUrl.pathname.startsWith("/api/authorization")) {
    const getHeader = new Headers(req.headers);
    const header = getHeader.get("token_cookie");

    if (header === "XYZ987APK") {
      getHeader.set("header_id", "10101");
      getHeader.set("header_name", "text_header_name");
      return NextResponse.next({
        request: {
          header: getHeader,
        },
      });
    } else {
      return NextResponse.json({ mgs: "unauthorized" }, { status: 401 });
    }
  } else if (req.nextUrl.pathname.startsWith("/api/response")) {
    console.log("response");
  } else if (req.nextUrl.pathname.startsWith("/api/set_cookies")) {
    console.log("api set cookies");
  } else if (req.nextUrl.pathname.startsWith("/api/redirect")) {
    console.log("redirect");
  } else {
    return NextResponse.json({ mgs: "unauthorized" }, { status: 401 });
  }
};

export const config = {
  matcher: ["/api/:path*", "/contact"],
};
