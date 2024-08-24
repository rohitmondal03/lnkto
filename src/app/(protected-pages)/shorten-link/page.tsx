import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { db } from "@/server/db"
import { getServerAuthSession } from "@/server/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { ShortenLinkForm } from "./_component/shorten-link-form"
import { CopyButton } from "@/components/shared/button/copy-button"


export default async function ShortenLinkPage() {
  const session = await getServerAuthSession();

  const usersLinks = await db.link.findMany({
    where: {
      userId: session?.user.id
    },
    select: {
      redirectPath: true,
      linkTitle: true,
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 5,
  })


  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-10 xl:gap-28 w-full px-1 sm:px-8 xl:px-12 py-8 bg-card">
      <ShortenLinkForm />
      <div className="border-t-2 lg:border-0 pt-4 space-y-4 w-full xl:w-[70%]">
        <h2 className="text-lg font-semibold text-card-foreground">
          {usersLinks.length === 0 ? (
            "You have 0 links"
          ) : (
            <>
              Your lastest {usersLinks.length < 5 ? usersLinks.length : 5} links:
            </>
          )}
        </h2>
        <div>
          {usersLinks.map((link) => (
            <div
              key={link.redirectPath}
              className="flex items-center justify-between"
            >
              <span className="text-sm">
                {link.linkTitle}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted"
              >
                <CopyButton text={`https://lnkto.vercel.app/${link.redirectPath}`} />
              </Button>
            </div>
          ))}
        </div>
        <Link
          href={"/dashboard"}
          className={buttonVariants({
            variant: "secondary",
            className: "flex items-center gap-2 w-full"
          })}
        >
          Dashboard
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  )
}
