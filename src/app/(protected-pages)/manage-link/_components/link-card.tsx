import { type Link as TLink } from "@prisma/client";
import Link from 'next/link';
import { CopyIcon, Edit2 } from 'lucide-react';

import { useCopy } from '@/hooks/use-copy';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';



export function LinkCard(props: TLink) {
  const handleLinkEdit = (path: string) => {

  }

  return (
    <Card>
      <CardContent className='p-6 border-zinc-700 space-y-4'>
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
        <div className='flex items-center gap-3'>
          <Button
            variant={"default"}
            size={"icon"}
            onClick={() => handleLinkEdit(props.redirectPath)}
          >
            <Edit2 className='scale-75' />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => useCopy("")}
          >
            <CopyIcon className='scale-75' />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}