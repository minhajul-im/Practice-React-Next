import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const productData = {
      title: "iPhone 15 Ultra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repellendus voluptatem nam quos quas molestias!",
      price: "$ 1599",
      discount: "- $ 100",
      discountPrice: "$ 1499",
      image:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quo doloremque repellat dolore aut consequuntur animi facere architecto repellendus dolores dolorem veniam, praesentium voluptatem blanditiis. Fugit sit quos ipsum sapiente debitis minima, tenetur incidunt in, expedita voluptatum repellendus nostrum modi!",
      star: 4.5,
      stock: "11",
    };

    const createdProduct = await prisma.product.create({ data: productData });

    return NextResponse.json(
      { dataAllProduct: createdProduct },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "THIS IS PRODUCT ERROR FROM CATCH BLOCK",
      error: error,
    });
  }
};
