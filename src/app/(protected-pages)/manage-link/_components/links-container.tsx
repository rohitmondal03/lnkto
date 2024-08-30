"use client"

import { type Link as TLink } from '@prisma/client';
import { useEffect, useState } from "react";

import { toast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { LinkCard } from './link-card';


type TProps = {
  userId: string;
}


export function LinksContainer({ }: TProps) {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<TLink[]>([]);
  const [totalUsersLinks, setTotalUsersLinks] = useState(0);
  const [page, setPage] = useState(1);


  // useEffect(() => {
  //   // count total links of users
  //   (async () => {
  //     await fetch("/api/users/count-users-links")
  //       .then(res => res.json())
  //       .then(data => setTotalUsersLinks(data))
  //       .catch((err) => {
  //         toast({
  //           title: "Error !!",
  //           description: `Error getting users links count !!, ${err}`
  //         })
  //       })
  //   })()
  // }, [])


  useEffect(() => {
    void (async () => {
      // if (totalUsersLinks > page * 4) {
      setIsFetching(true);

      await fetch("/api/users/get-links", {
        method: "POST",
        body: JSON.stringify({
          page: page,
        })
      })
        .then(res => res.json())
        .then((data: TLink[]) => setData(data))
        .catch((err) => {
          toast({
            title: "Error !!",
            description: `Error while retreiving data, ${err}`
          })
        })
        .finally(() => {
          setIsFetching(false);
        })
      // }
    })()
  }, [page])


  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        {data.map((data) => (
          <LinkCard key={data.id} {...data} />
        ))}
      </div>
      <div className='w-full'>
        <Button
          className='mx-auto'
          onClick={() => setPage(prev => prev + 1)}
        >
          {isFetching ? "Fetching..." : "Load more"}
        </Button>
      </div>
    </div>
  )
}