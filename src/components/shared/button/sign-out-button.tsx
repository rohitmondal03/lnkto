"use client"

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'


export function SignOutButton() {
  return (
    <Button
      className='w-full py-0 text-sm'
      size={"sm"}
      variant={"destructive"}
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  )
}
