"use client"

import { useState } from "react"

import type { TLink } from "@/lib/types"
import { shortenLinkAction } from "@/action/link-action"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"
import { SubmitButton } from "@/components/shared/button/form-button"
import { Badge } from "@/components/ui/badge"


export function ShortenLinkForm() {
  const [range, setRange] = useState(10);

  const clientShortenLinkAction = async (formData: FormData) => {
    const data = {
      link: formData.get("url"),
      length: Number(formData.get("range")),
      title: formData.get("title")
    }
    
    const short = await shortenLinkAction(data as TLink);

    toast({
      title: "Link shortened",
      description: "https://lnkto.vercel.app" + short.path,
    })
  }


  return (
    <div className="space-y-4 w-full">
      <h1 className="text-3xl font-bold text-center">
        Link Shortener
      </h1>
      <form
        className="space-y-6"
        action={clientShortenLinkAction}
      >
        <div>
          <Label
            htmlFor="title"
            className="block mb-1 text-sm font-medium text-card-foreground"
          >
            URL Title
          </Label>
          <Input
            id="title"
            type="title"
            name="title"
            required
            placeholder="Enter URL title, e.g. My Resume"
            autoComplete="off"
            className="w-full"
          />
        </div>
        <div>
          <Label
            htmlFor="url"
            className="block mb-1 text-sm font-medium text-card-foreground"
          >
            Long URL
          </Label>
          <Input
            id="url"
            type="url"
            name="url"
            required
            placeholder="Enter a long URL, e.g. myresume.com"
            autoComplete="off"
            className="w-full"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-start gap-3 w-full">
            <Label
              htmlFor="range"
              className="block mb-1 text-sm font-medium text-card-foreground whitespace-nowrap"
            >
              Select length of unique ID:
            </Label>
            <Badge>
              {range}
            </Badge>
          </div>
          <Slider
            name="range"
            min={7}
            max={15}
            defaultValue={[10]}
            onValueChange={val => setRange(val[0] ?? 10)}
            className="border border-zinc-500 rounded-lg"
            color="red"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
