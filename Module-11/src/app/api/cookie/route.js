import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (_req, _res) => {
  const cookie = cookies();

  cookie.set("user-token", "abc123");

  const get_cookie = cookie.get("user-token");

  return NextResponse.json(
    { name: "minhaj", user_token: get_cookie },
    { status: 201 }
  );
};
