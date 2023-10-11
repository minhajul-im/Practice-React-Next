import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json({ data: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM FIND MANY USER!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const newUser = await prisma.user.create({
      data: body,
    });

    return NextResponse.json({ data: newUser }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM CREATE USER!", data: err.message },
      { status: 406 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updatedUser }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM UPDATE DATA!", data: err.message },
      { status: 401 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.user.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "failed", data: err.message },
      { status: 401 }
    );
  }
};
