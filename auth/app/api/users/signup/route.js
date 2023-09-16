import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

export async function POST(request) {
  await connect();

  try {
    const getRequestBody = await request.json();
    const { name, email, password } = getRequestBody;

    console.log({ name, email, password });

    // simple check
    const user = await User.findOne({ email });

    if (user) {
      console.log({ user });

      return NextResponse.json(
        { error: "USER ALREADY EXISTS!" },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPass = await bcryptjs.hash(password, salt);

    // create user
    const newUser = new User({
      name,
      email,
      password: hashPass,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "user created successfully signup backend!",
      status: true,
      savedUser,
    });
  } catch (error) {
    console.log("ERROR FROM POST REQUEST FROM SIGNUP!", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
