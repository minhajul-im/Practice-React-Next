import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export const GET = async (request) => {
  await connect();

  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({
      message: "user found!",
      data: user,
    });
  } catch (error) {
    console.log("ERROR FROM USER!");
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
