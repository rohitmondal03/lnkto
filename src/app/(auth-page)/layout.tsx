import { redirect } from "next/navigation";

import type { TLayout } from "@/lib/types";
import { getServerAuthSession } from "@/server/auth"


export default async function layout({children}: TLayout) {
  const isSession = !! await getServerAuthSession();

  if(isSession) redirect("/dashboard")

  return (
    <>
      {children}
    </>
  )
}
