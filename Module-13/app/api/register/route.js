import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export const POST = async (req, _res) => {
  try {
    const { name, email, password } = await req.json();

    console.log({ name, email, password });

    const hashPassword = await bcrypt.hash(password, 10);

    await connectMongoDB(process.env(MONGODB_URI));

    await User({ name, email, password: hashPassword });

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
