import { redirect } from "next/navigation";
import { type PropsWithChildren } from "react";

import { getServerAuthSession } from "@/server/auth"


export default async function layout({children}: PropsWithChildren) {
  const isSession = !! await getServerAuthSession();

  if(!isSession) redirect("/sign-in")

  return (
    <>
      {children}
    </>
  )
}
