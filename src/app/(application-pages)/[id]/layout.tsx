import { db } from '@/server/db'
import { redirect } from 'next/navigation'

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

  redirect(linkDetails?.link ?? "")
}
