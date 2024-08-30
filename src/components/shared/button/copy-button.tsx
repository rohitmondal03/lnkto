"use client"

import { CopyIcon } from 'lucide-react'

import { useCopy } from '@/hooks/use-copy'


type TProps = {
  text: string
}


export function CopyButton({ text }: TProps) {
  const copyText = useCopy();

  return (
    <>
      <CopyIcon
        className="w-4 h-4"
        onClick={() => copyText(text)}
      />
      <span className="sr-only">
        Copy
      </span>
    </>
  )
}
