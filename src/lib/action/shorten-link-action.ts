"use server"

import ShortUniqueId from "short-unique-id"

import type { TLink } from "../types"
import { db } from "@/server/db"
import { getServerAuthSession } from "@/server/auth"


export async function shortenLinkAction({ link, length }: TLink) {
  const session = await getServerAuthSession();

  const uid = new ShortUniqueId({
    length: length,
  })

  await db.link.create({
    data: {
      link: link,
      clicks: 0,
      redirectPath: uid.rnd(),
      userId: session?.user.id ?? ""
    }
  })

  return {
    link,
    path: uid.rnd(),
  }
}