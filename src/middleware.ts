import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

import { getServerAuthSession } from "./server/auth";


async function middleware(request: NextRequest) {
  const session = await getServerAuthSession()

  if (!session?.user && request.nextUrl.pathname === "/shorten-link") {
    return NextResponse.rewrite(new URL('/sign-in', request.url))
  }
}

// export default withAuth({
//   pages: {
//     signIn: "/sign-in",
//     error: "/error",
//   },
// })

export default withAuth(middleware)

// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/shorten-link',
}


// export { default } from "next-auth/middleware"