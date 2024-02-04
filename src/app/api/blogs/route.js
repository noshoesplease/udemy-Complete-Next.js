import { NextResponse } from "next/server";

import blogs from "@/content/blogs.json";

export const GET = () => NextResponse.json({ data: blogs });
