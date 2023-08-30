import { NextResponse } from "next/server";

export const middleware = (req, _res) => {
  if (req.nextUrl.pathname.startsWith("/api/authorization")) {
    const header = new Headers(req.headers);

    const get_token = header.get("get_token");

    if (get_token === "XYZ987APK") {
      header.set("user", "@minhajul-im");
      header.set("email", "minhajul@gmail.com");

      return NextResponse.next({ request: { headers: header } });
    } else {
      return NextResponse.json({ mgs: "unauthorized" }, { status: 401 });
    }
  } else if (req.nextUrl.pathname.startsWith("/api/response")) {
    console.log("response");
  } else if (req.nextUrl.pathname.startsWith("/api/set_cookies")) {
    console.log("api set cookies");
  } else if (req.nextUrl.pathname.startsWith("/api/redirect")) {
    console.log("redirect");
  } else if (req.nextUrl.pathname.startsWith("/api/cookie")) {
    const header_set = new Headers(req.headers);

    const get_token = header_set.get("X-Auth-Token");

    if (get_token === "12345") {
      header_set.set("user", "@minhajul-im");
      header_set.set("email", "minhajul@gmail.com");

      return NextResponse.next({ request: { headers: header_set } });
    } else {
      return NextResponse.json({ mgs: "unauthorized" }, { status: 401 });
    }
  } else {
    return NextResponse.json({ mgs: "unauthorized" }, { status: 401 });
  }
};

export const config = {
  matcher: ["/api/:path*", "/contact"],
};
