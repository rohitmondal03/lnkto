import Link from "next/link"

import Logo from "./logo"
import { buttonVariants } from "../ui/button"


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b-2 border-zinc-300 py-6 px-20'>
      <Logo />
      <div className="flex items-center gap-x-8">
        <Link
          href={"/sign-in"}
          className={buttonVariants({
            variant: "default",
          })}
        >
          Sign In
        </Link>
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
