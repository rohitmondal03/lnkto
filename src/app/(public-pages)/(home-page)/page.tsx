import Link from "next/link"
import Image from "next/image"
import { ClockIcon, InfoIcon, LinkIcon } from "lucide-react"


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-5">
              <h1 className="lg:leading-tight text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Shorten your links with <span className="underline decoration-slate-500">lnkto</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                lnkto is a simple and powerful link shortener that helps you create custom, trackable links for your
                business.
              </p>
              <Link
                href="/shorten-link"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Shortening
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/hero-img.svg"
                width="400"
                height="400"
                alt="lnkto hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start gap-4">
              <LinkIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">
                Customizable Links
              </h3>
              <p className="text-muted-foreground">
                Create custom, branded links that are easy to remember and share.
                </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <InfoIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">
                Advanced Analytics
              </h3>
              <p className="text-muted-foreground">
                Track your link performance with detailed analytics and insights.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <ClockIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">
                Link Expiration
              </h3>
              <p className="text-muted-foreground">
                Set expiration dates for your links to control access and visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}