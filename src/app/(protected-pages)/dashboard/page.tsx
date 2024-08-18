import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { LinkTable } from "./_components/link-table"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"


export default async function DashboardPage() {
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  const usersLinks = await db.link.findMany({
    where: {
      userId: userId
    },
    select: {
      link: true,
      clicks: true,
      linkTitle: true,
      redirectPath: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc"
    },
  })


  return (
    <div className="flex min-h-full w-full flex-col bg-slate-500/10 space-y-8 py-6 rounded-xl">
      <header className="sticky top-0 z-30 flex flex-col sm:flex-row h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <p className="text-xl font-semibold">
          Your&apos;s links Dashboard
        </p>
        <div className="relative sm:ml-auto flex-1 sm:grow-0 w-full">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            name="search-field"
            type="search"
            placeholder="Search links..."
            className="w-full rounded-lg bg-background pl-8 sm:w-[230px] lg:w-[336px]"
          />
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>
              Link Analytics
            </CardTitle>
            <CardDescription>
              View and manage the performance of your shortened links.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 sm:px-6">
            <LinkTable
              links={usersLinks}
            />
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>{usersLinks.length}</strong> links
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}