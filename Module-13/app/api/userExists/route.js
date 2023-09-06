import User from "@/models/user";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export const POST = async (req, _res) => {
  try {
    await connectMongoDB();
    const { email } = await req.json();

    const user = await User.findOne({ email }).select("_id");

    console.log("user" + user);

    return NextResponse.json({ user });
  } catch (e) {
    console.log(e);
  }
};
