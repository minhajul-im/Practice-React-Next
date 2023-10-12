import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async () => {
  try {
    const usersData = await prisma.user.createMany({
      data: {
        firstName: "minhajul",
        middleName: "minhaj",
        lastName: "islam",
        email: "minhajul1@gmail.xom",
        intro:
          "hey there, i'm minhaj from dhaka bangladesh. if you wanna know go visit",
        passwordHash: "minhaj101",
        mobile: "+8801301109244",
        profile: "https://www.minhajul.com/",
      },
    });

    return NextResponse.json({ data: usersData }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "USER CREATE ERROR!" },
      { status: 500 }
    );
  }
};
