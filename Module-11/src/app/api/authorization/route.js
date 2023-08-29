import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  const header = headers();

  const header_id = header.get("header_id");
  const header_text = header.get("header_name");

  return NextResponse.json(
    { success: "authorized", header_id: header_id, header_text: header_text },
    { status: 201 }
  );
};
