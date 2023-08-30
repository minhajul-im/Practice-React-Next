import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  const header = headers();

  const get_user = header.get("user");
  const get_email = header.get("email");

  return NextResponse.json(
    {
      success: "authorized",
      get_user: get_user,
      get_email: get_email,
    },
    { status: 201 }
  );
};
