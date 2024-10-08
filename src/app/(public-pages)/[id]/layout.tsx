import { notFound, redirect } from 'next/navigation'

import { db } from '@/server/db'


export default async function layout({
  params
}: {
  params: {
    id: string
  }
}) {

  const linkDetails = await db.link.findFirst({
    where: {
      redirectPath: params.id
    },
    select: {
      clicks: true,
      link: true,
    }
  })

  if(!linkDetails) {
    return notFound();
  }

  await db.link.update({
    where: {
      redirectPath: params.id
    },
    data: {
      clicks: Number(linkDetails?.clicks) + 1,
      lastClicked: new Date(),
    }
  })

  redirect(linkDetails?.link ?? "")
}
