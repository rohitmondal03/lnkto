"use client"

import Link from "next/link"
import { Trash2 } from "lucide-react"

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


type TProps = {
  links: {
    link: string,
    clicks: number,
    linkTitle: string,
    redirectPath: string,
    createdAt: Date,
  }[]
}


export function LinkTable({ links }: TProps) {
  return links.length > 0 ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className="hidden lg:table-cell">Link</TableHead>
          <TableHead className="hidden lg:table-cell">Created At</TableHead>
          <TableHead className="table-cell">Shortened</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {links.map((link) => (
          <TableRow
            key={link.redirectPath}
            className="hover:bg-orange-100/40 cursor-pointer"
          >
            <TableCell>
              {link.linkTitle}
            </TableCell>
            <TableCell className="hidden lg:table-cell font-medium w-64">
              {link.link}
            </TableCell>
            <TableCell className="hidden lg:table-cell font-medium">
              {link.createdAt.toDateString()}
            </TableCell>
            <TableCell className="table-cell">
              <Badge
                className="cursor-pointer"
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
                onClick={() => deleteLinkAction(link.redirectPath)}
                size={"20"}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
