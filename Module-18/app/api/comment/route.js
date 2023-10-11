import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const comment = await prisma.postComment.findMany();

    return NextResponse.json({ data: comment }, { status: 401 });
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM FIND MANY COMMENT!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const comment = await prisma.postComment.create({
      data: body,
    });

    return NextResponse.json({ data: comment }, { status: 202 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM CREATE COMMENT!", data: err.message },
      { status: 401 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updateComment = await prisma.postComment.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updateComment });
  } catch (err) {
    return NextResponse.json({
      status: "ERROR FROM UPDATE COMMENT!",
      data: err.message,
    });
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.postComment.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM COMMENT DELETE!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};
