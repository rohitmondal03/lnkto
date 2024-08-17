"use server"

import ShortUniqueId from "short-unique-id"

import type { TLink } from "../types"
import { db } from "@/server/db"
import { getServerAuthSession } from "@/server/auth"
import { revalidatePath } from "next/cache"


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

  revalidatePath("/shorten-link")

  return {
    link,
    path: uid.rnd(),
  }
}