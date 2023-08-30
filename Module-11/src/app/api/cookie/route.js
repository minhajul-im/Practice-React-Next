import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (_req, _res) => {
  const cookie = cookies();
  const header = headers();

  cookie.set("user-token", "abc123");

  const get_user = header.get("user");
  const get_email = header.get("email");

  const get_cookie = cookie.get("user-token");

  return NextResponse.json(
    {
      name: "minhaj",
      get_user: get_user,
      get_email: get_email,
      user_token: get_cookie,
    },
    { status: 201 }
  );
};
