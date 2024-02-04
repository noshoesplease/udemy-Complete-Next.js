import { NextResponse } from "next/server";
import blogs from "@/content/blogs.json";
import { delay } from "@/utils/index";

export async function GET() {
  //   await delay(10000);
  return NextResponse.json({ data: blogs });
}
