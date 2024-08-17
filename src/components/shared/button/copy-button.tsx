"use client"

import { CopyIcon } from 'lucide-react'

import { copyText } from '@/lib/functions/copy-text'


type TProps = {
  text: string
}


export function CopyButton({ text }: TProps) {
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
