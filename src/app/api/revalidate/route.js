import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json(
      {
        message: "Invalid secret",
      },
      {
        status: 401,
      }
    );
  }

  if (!tag) {
    return NextResponse.json(
      {
        message: "Invalid tag",
      },
      {
        status: 400,
      }
    );
  }

  revalidateTag(tag);

  /**
   * With tag revalidation, the server will only revalidate the page when the
   * page with the specified tags is modified. If the page with the specified
   * tags is not modified, the server will serve the generated page to the user
   */
  // http://localhost:3000/api/revalidate?tag=blogs&secret=ashjklfdsljkl
  return NextResponse.json({
    revalidated: true,
    time: Date.now(),
  });
}
