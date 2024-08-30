import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  const data = await db.link.count({
    where: {
      userId,
    },
  })

  return NextResponse.json(data)
}
