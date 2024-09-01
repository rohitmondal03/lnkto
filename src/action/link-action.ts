"use server"

import ShortUniqueId from "short-unique-id"

import type { TLink } from "../lib/types"
import { db } from "@/server/db"
import { getServerAuthSession } from "@/server/auth"
import { revalidatePath } from "next/cache"


export async function shortenLinkAction({ link, length, title }: TLink) {
  const session = await getServerAuthSession();

  const uid = new ShortUniqueId({
    length: length,
  })

  await db.link.create({
    data: {
      link: link,
      clicks: 0,
      redirectPath: uid.rnd(),
      userId: session?.user.id ?? "",
      linkTitle: title,
    }
  })

  revalidatePath("/shorten-link")

  return {
    link,
    path: uid.rnd(),
  }
}


export async function deleteLinkAction(shortLink: string) {
  await db.link.delete({
    where: {
      redirectPath: shortLink
    }
  })

  revalidatePath("/dashboard");
  revalidatePath("/manage-link", "page");
}