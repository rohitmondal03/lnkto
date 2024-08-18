import Link from "next/link"
import { FrownIcon } from "lucide-react"


export default function NotFOundPage() {
  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center bg-background">
      <div className="mx-auto max-w-md text-center">
        <FrownIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-muted-foreground">
          Oops, the page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}