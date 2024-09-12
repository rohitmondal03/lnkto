"use client"

import type { Link as TLink } from "@prisma/client";
import Link from 'next/link';
import { useState, useTransition } from "react";
import { CopyIcon, Edit2, Trash2 } from 'lucide-react';
import QRCode from "react-qr-code"

import { useCopy } from '@/hooks/use-copy';
import { deleteLinkAction } from "@/action/link-action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export function LinkCard(props: TLink) {
  const copyText = useCopy();
  const [isPending, transition] = useTransition();


  const handleLinkDelete = async (redirectPath: string) => {
    await deleteLinkAction(redirectPath)
      .then(() => {
        toast({
          title: "Link deleted",
          description: "Link deleted successfully !!",
          type: "foreground",
        })
      })
      .catch(() => {
        toast({
          title: "Cannot delete",
          description: "Not able to delete this links right now !!",
          type: "background"
        })
      })
  }


  return (
    <Card className="border-2 border-slate-300">
      <CardContent className='p-6 space-y-4'>
        <div className="mb-2">
          <p className="font-bold">
            Title:
          </p>
          <p className="text-primary hover:underline">
            {props.linkTitle}
          </p>
        </div>
        <div className="mb-2">
          <p className="font-bold">
            Original Link:
          </p>{" "}
          <Link
            prefetch={false}
            href={props.link}
            className="text-primary hover:underline"
          >
            {props.link}
          </Link>
        </div>
        <div className="mb-2">
          <p className="font-bold">
            Shortened Link:
          </p>{" "}
          <Link href="#" className="text-primary hover:underline" prefetch={false}>
            https://lnkto.vercel.app/{props.redirectPath}
          </Link>
        </div>
        <div>
          <p className="text-muted-foreground">
            Clicks: <span>{props.clicks}</span>
          </p>
        </div>
        <div className='flex items-center gap-5'>
          <Button
            variant={"default"}
            size={"icon"}
          >
            <Edit2 className='scale-75' />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => copyText(`https://lnkto.vercel.app/${props.redirectPath}`)}
          >
            <CopyIcon className='scale-75' />
          </Button>
          <Button
            variant={"destructive"}
            size={"icon"}
            onClick={() => transition(() => handleLinkDelete(props.redirectPath))}
          >
            <Trash2 />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Show QR Code</Button>
            </DialogTrigger>
            <DialogContent className="h-[40vh]">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">
                  Scan this QR Code to go to this link
                </DialogTitle>
              </DialogHeader>
              <QRCode
                value={`https://lnkto.vercel.app/${props.redirectPath}`}
                size={55}
                style={{
                  height: "70%",
                  maxWidth: "100%",
                  width: "70%",
                  margin: "0 auto"
                }}
                allowReorder="yes"
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
