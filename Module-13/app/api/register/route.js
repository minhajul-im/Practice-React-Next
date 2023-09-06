import bcrypt from "bcryptjs";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";

export const POST = async (req, _res) => {
  try {
    const { name, email, password } = await req.json();

    const hashPassword = await bcrypt.hash(password, 10);

    await connectMongoDB(process.env.MONGODB_URI);

    console.log({ name, email, hashPassword });

    await User.create({ name, email, hashPassword });

    // const user = new User({ name, email, hashPassword });
    // await user.save();

    return NextResponse.json(
      { message: "Your register done!" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "An error occurred! " },
      { status: 500 }
    );
  }
};
