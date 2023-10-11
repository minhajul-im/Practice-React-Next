import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json({ data: posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM FIND MANY POST!", data: err.message },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const postData = await prisma.post.create({
      data: body,
    });

    return NextResponse.json({ data: postData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM CREATE POST!", data: err.message },
      { status: 401 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedData = await prisma.post.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updatedData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM UPDATE POST!", data: err.message },
      { status: 401 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.post.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM DELETE POST", data: err.message },
      { status: 401 }
    );
  }
};
