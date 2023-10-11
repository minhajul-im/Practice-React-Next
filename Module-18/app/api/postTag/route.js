import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const tagPost = await prisma.postTag.findMany();

    return NextResponse.json({ data: tagPost }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM FIND MANY TAG POST!", data: err.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const tagPost = await prisma.postTag.create({ data: body });

    return NextResponse.json({ data: tagPost });
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM CREATE TAG POST!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedTagPost = await prisma.postTag.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updatedTagPost }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM UPDATE POST TAG!", data: err.message },
      { status: 401 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.postTag.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM DELETE POST TAG!", data: err.message },
      { status: 401 }
    );
  }
};
