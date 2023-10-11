import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const data = await prisma.category.findMany();

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM FIND MANY CATEGORY", data: err.message },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const categoryData = await prisma.category.create({ data: body });

    return NextResponse.json({ data: categoryData }, { status: 202 });
  } catch (err) {
    return NextResponse.json({
      status: "ERROR FROM CREATE POST!",
      data: err.message,
    });
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedData = await prisma.category.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updatedData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      status: "ERROR FROM UPDATE CATEGORY!",
      data: err.message,
    });
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.category.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json({
      status: "ERROR FROM DELETE CATEGORY",
      data: err.message,
    });
  }
};
