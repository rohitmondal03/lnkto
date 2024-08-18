import Link from "next/link"

import type { TLayout } from "@/lib/types"
import Logo from "./logo"
import { getServerAuthSession } from "@/server/auth"
import { SignOutButton } from "./button/sign-out-button"
import { buttonVariants } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"


export default async function Navbar() {
  const session = await getServerAuthSession();
  const user = session?.user;


  return (
    <nav className='flex items-center justify-between border-b-2 border-zinc-300 py-4 sm:py-6 px-4 sm:px-12 md:px-20'>
      <Logo />
      <div className="flex items-center gap-x-4 sm:gap-x-8">
        {session ? (
          <AvatarDropdown>
            <Avatar>
              <AvatarImage
                src={user?.image ?? ""}
                loading="lazy"
                className="cursor-pointer"
              />
              <AvatarFallback>
                {user?.name?.charAt(0) ?? ""}
              </AvatarFallback>
            </Avatar>
          </AvatarDropdown>
        ) : (
          <Link
            href={"/sign-in"}
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            Sign In
          </Link>
        )}
        <Link
          href={"/shorten-link"}
          className={buttonVariants({
            variant: "default",
          })}
        >
          Shorten link
        </Link>
      </div>
    </nav>
  )
}



const AvatarDropdown = ({ children }: TLayout) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-bold space-y-2">
        <DropdownMenuItem>
          <Link href={"/dashboard"}>
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-0 py-0">
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}