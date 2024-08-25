"use client"

import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button'


export function SignOutButton() {
  const [isLoading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);

    try {
      await signOut()
    } finally {
      setLoading(false);
    }
  }


  return (
    <Button
      className='w-full py-0 text-sm'
      size={"sm"}
      disabled={isLoading}
      variant={"destructive"}
      onClick={handleSignOut}
    >
      {isLoading ? (
        <Loader2 />
      ) : (
        <>Sign Out</>
      )}
    </Button>
  )
}
