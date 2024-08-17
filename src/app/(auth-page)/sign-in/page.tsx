"use client"

import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"


export default function SingInPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Sign in to your account
        </h1>
        <p className="mt-4 text-muted-foreground">
          Sign in with your preferred OAuth provider to access your account.
        </p>
        <div className="mt-6 space-y-4">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => signIn("github", { callbackUrl: "/shorten-link" })}
          >
            Sign in with GitHub
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => signIn("discord", { callbackUrl: "/shorten-link" })}
          >
            Sign in with Discord
          </Button>
        </div>
      </div>
    </div>
  )
}