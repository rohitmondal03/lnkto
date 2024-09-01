import type { Link as TLink } from "@prisma/client";
import Link from 'next/link';
import { useState } from "react";
import { CopyIcon, Edit2, Trash2 } from 'lucide-react';

import { useCopy } from '@/hooks/use-copy';
import { deleteLinkAction } from "@/action/link-action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { toast } from "@/components/ui/use-toast";


export function LinkCard(props: TLink) {
  const copyText = useCopy();
  const [isLoading, setLoading]= useState(false);


  const handleLinkDelete =  async (redirectPath: string) => {
    setLoading(true);

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
      .finally(() => {
        setLoading(false);
      })
  }


  return (
    <Card>
      <CardContent className='p-6 border-zinc-700 space-y-4'>
        <div className="mb-2">
          <p className="font-bold">
            Title:
          </p>
          <Link href="#" className="text-primary hover:underline" prefetch={false}>
            {props.linkTitle}
          </Link>
        </div>
        <div className="mb-2">
          <p className="font-bold">
            Original Link:
          </p>{" "}
          <Link href="#" className="text-primary hover:underline" prefetch={false}>
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
          <p className="text-muted-foreground">Clicks: <span>{props.clicks}</span></p>
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
            onClick={() => handleLinkDelete(props.redirectPath)}
          >
            <Trash2 />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
