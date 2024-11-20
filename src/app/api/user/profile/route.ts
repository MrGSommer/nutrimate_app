import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { query } from "@/lib/neo4j/client";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const result = await query(
      `
      MATCH (u:User {id: $userId})
      RETURN u
      `,
      { userId }
    );

    if (result.length === 0) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(result[0].get("u").properties);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 