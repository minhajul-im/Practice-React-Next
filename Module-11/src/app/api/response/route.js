import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(
    { mgs: "Welcome to our API", version: "101" },
    {
      status: 201,
      headers: { "Set-Cookie": `token=set_cookie; path=/set_cookies` },
    }
  );
};
