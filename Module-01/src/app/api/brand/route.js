import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    let brandData;
    const prisma = new PrismaClient();
    brandData = {
      brandName: "iPhone",
      brandImage: "iPhone Brand Image!",
    };
    const createdBrand = await prisma.brand.create({ data: brandData });
    return NextResponse.json({ dataAllBrand: createdBrand }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "THIS IS BRAND ERROR FROM CATCH BLOCK",
      error: error,
    });
  }
};
