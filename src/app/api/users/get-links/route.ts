import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { NextResponse } from "next/server";


type TRequestBody = {
  page: number
}


export async function POST(req: Request) {
  const { page }: TRequestBody = await req.json() as TRequestBody;
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  const data = await db.link.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc"
    },
    take: page * 6,
    // skip: (page - 1) * 4,
  })

  return NextResponse.json(data)
}
