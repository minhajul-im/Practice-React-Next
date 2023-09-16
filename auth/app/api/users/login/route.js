import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connect();

  try {
    const getRequestData = await request.json();
    const { email, password } = getRequestData;
    console.log(getRequestData);

    //check user exists!!
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "USER DOESN'T EXISTS!!" },
        { status: 400 }
      );
    }
    // check validated password
    const validatedPassword = await bcryptjs.compare(password, user.password);
    if (!validatedPassword) {
      return NextResponse.json(
        { message: "INVALID PASSWORD" },
        { status: 400 }
      );
    }

    //create token data
    const createTokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    const token = await jwt.sign(createTokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "login successfully",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error) {
    console.log("ERROR FROM LOGIN PAGE!", error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
