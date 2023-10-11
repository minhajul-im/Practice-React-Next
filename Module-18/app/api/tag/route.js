import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const tagData = await prisma.tag.findMany();

    return NextResponse.json({ data: tagData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM FIND MANY TAG!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const Data = await prisma.tag.create({ data: body });

    return NextResponse.json({ data: Data }, { status: 202 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM CREATE TAG!", data: err.message },
      { status: 401 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedData = await prisma.tag.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updatedData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      status: "ERROR FROM UPDATE TAG!D",
      data: err.message,
    });
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.tag.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM DELETE TAG!", data: err.message },
      { status: 401 }
    );
  }
};
