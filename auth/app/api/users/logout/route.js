import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = NextResponse.json({
      message: "logout successfully!",
      success: true,
    });

    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error) {
    console.log("ERROR FROM LOGOUT!", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
