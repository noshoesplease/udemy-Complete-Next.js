import { NextResponse } from "next/server";

import portfolios from "@/content/portfolios.json";

export const GET = () => NextResponse.json({ data: portfolios });
