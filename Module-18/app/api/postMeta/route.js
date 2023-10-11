import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const postMetaData = await prisma.postMeta.findMany();

    return NextResponse.json({ data: postMetaData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM FIND MANY POST META!", data: err.message },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const createMetaData = await prisma.postMeta.create({ data: body });

    return NextResponse.json({ data: createMetaData }, { status: 202 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM CREATE POST META!", data: err.message },
      { status: 401 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedData = await prisma.postMeta.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json({ data: updatedData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM UPDATE POST META!", data: err.message },
      { status: 401 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.postMeta.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM DELETE POST META!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};
