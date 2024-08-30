import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const { page } = await req.json();
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  const data = await db.link.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc"
    },
    take: page * 4,
    // skip: (page - 1) * 4,
  })

  return NextResponse.json(data)
}
