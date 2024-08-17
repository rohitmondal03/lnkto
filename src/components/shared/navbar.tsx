import Link from "next/link"

import Logo from "./logo"
import { getServerAuthSession } from "@/server/auth"
import { buttonVariants } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"


export default async function Navbar() {
  const session = await getServerAuthSession();
  const user = session?.user;

  return (
    <nav className='flex items-center justify-between border-b-2 border-zinc-300 py-6 px-20'>
      <Logo />
      <div className="flex items-center gap-x-8">
        {session ? (
          <Avatar>
            <AvatarImage
              src={user?.image ?? ""}
              loading="lazy"
            />
            <AvatarFallback>
              {user?.name?.charAt(0) ?? ""}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Link
            href={"/sign-in"}
            className={buttonVariants({
              variant: "default",
            })}
          >
            Sign In
          </Link>
        )}
        <Link
          href={"/shorten-link"}
          className={buttonVariants({
            variant: "secondary",
          })}
        >
          Shorten link
        </Link>
      </div>
    </nav>
  )
}
