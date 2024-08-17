import { db } from "@/server/db"
import { getServerAuthSession } from "@/server/auth"
import { Button } from "@/components/ui/button"
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
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 5,
  })


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full px-4 py-8 bg-card space-y-6">
        <ShortenLinkForm />
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-card-foreground">
            Your last {usersLinks.length < 5 ? usersLinks.length : 5} links:
          </h2>
          <div className="space-y mt-2">
            {usersLinks.map((link) => (
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  https://lnkto.vercel.app/{link.redirectPath}
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
        </div>
      </div>
    </div>
  )
}
