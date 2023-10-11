import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const postCategoryData = await prisma.postCategory.findMany();

    return NextResponse.json({ data: postCategoryData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM FIND MANY POST CATEGORY!", data: err.message },
      { status: 401 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const createPostCategory = await prisma.postCategory.create({ data: body });

    return NextResponse.json({ data: createPostCategory }, { status: 201 });
  } catch (err) {
    return NextResponse.json({
      status: "ERROR FROM CREATE POST CATEGORY!",
      data: err.message,
    });
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedData = await prisma.postCategory.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json({ data: updatedData });
  } catch (err) {
    return NextResponse.json(
      {
        status: "ERROR FROM UPDATE POST CATEGORY!",
        data: err.message,
      },
      { status: 401 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;
    const deletedData = await prisma.post_category.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { status: 204, data: deletedData },
      { status: 204 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "ERROR FROM DELETE CATEGORY!", data: err.message },
      { status: 401 }
    );
  }
};
