import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";


export async function GET() {
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  const data = await db.link.count({
    where: {
      userId,
    },
  })

  return NextResponse.json(data)
}
