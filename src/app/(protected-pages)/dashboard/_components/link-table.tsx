"use client"

import Link from "next/link"
import { useEffect, useTransition } from "react"
import { Loader2, Trash2 } from "lucide-react"

import { deleteLinkAction } from "@/action/link-action"
import { copyText } from "@/lib/functions/copy-text"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"


type TProps = {
  links: {
    link: string,
    clicks: number,
    linkTitle: string,
    redirectPath: string,
    createdAt: Date,
    lastClicked: Date | null,
  }[]
}


export function LinkTable({ links }: TProps) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log(isPending);
  }, [isPending]);

  return links.length > 0 ? (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden lg:table-cell">Link</TableHead>
            <TableHead className="hidden lg:table-cell">Last Clicked</TableHead>
            <TableHead className="table-cell">Shortened</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((link) => (
            <TableRow
              key={link.redirectPath}
              className="hover:bg-transparent"
            >
              <TableCell>
                {link.linkTitle}
              </TableCell>
              <TableCell className="hidden lg:table-cell font-medium w-64">
                {link.link}
              </TableCell>
              <TableCell className="hidden lg:table-cell font-medium">
                {link.lastClicked ? link.lastClicked.toDateString() : "--"}
              </TableCell>
              <TableCell className="table-cell w-fit">
                <Badge
                  className="cursor-pointer bg-zinc-200 hover:bg-black hover:text-white"
                  variant="secondary"
                  onClick={() => copyText(`https://lnkto.vercel.app/${link.redirectPath}`)}
                >
                  <span className="hidden lg:block">lnkto.vercel.app</span>/{link.redirectPath}
                </Badge>
              </TableCell>
              <TableCell>
                {link.clicks}
              </TableCell>
              <TableCell>
                <Trash2
                  className="cursor-pointer hover:scale-110 transition"
                  onClick={() => startTransition(() => deleteLinkAction(link.redirectPath))}
                  size={"20"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Dialog for loading state while deleting link */}
      <Dialog open={isPending}>
        <DialogContent className="max-h-[50vh] flex items-center justify-center">
          <Loader2 />
        </DialogContent>
      </Dialog>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center w-full gap-y-4 my-4">
      <h1 className="text-xl font-semibold text-slate-600 text-center">
        You&apos;ve no links added !!
      </h1>
      <Link
        href={"/shorten-link"}
        className={buttonVariants({
          variant: "secondary",
          className: "mx-auto"
        })}
      >
        Shorten Link
      </Link>
    </div>
  )
}