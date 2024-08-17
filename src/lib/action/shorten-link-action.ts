"use server"

import ShortUniqueId from "short-unique-id"

import { db } from "@/server/db"
import type { TLink } from "../types"


export async function shortenLinkAction({ link, length }: TLink) {
  const uid = new ShortUniqueId({
    length: length,
  })

  await db.link.create({
    data: {
      link: link,
      clicks: 0,
      redirectPath: uid.rnd(),
    }
  })

  return {
    link,
    path: uid.rnd(),
  }
}