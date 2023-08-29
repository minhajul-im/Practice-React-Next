import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import SetCookiesFunc from "@/utils/SetCookieFunc";

export const POST = async () => {
  const cookie = cookies();

  const { my_cookies } = SetCookiesFunc();

  cookie.set({
    name: my_cookies["key"],
    value: my_cookies["value"],
    // name: "user_cookies",
    // value: "show_user_cookies_value",
    httpOnly: true,
    path: "/set_cookies",
  });

  const get_cookies = cookie.get(my_cookies["key"]);
  // const get_cookies = cookie.get("user_cookies");

  return NextResponse.json(
    { cookie: "set_cookies", cookie: get_cookies },
    {
      status: 201,
      headers: { "Set-Cookie": `set_cookie=value_cookie;` },
    }
  );
};

export const GET = async () => {
  return NextResponse.json({ mgs: "minhaj" }, { status: 201 });
};
