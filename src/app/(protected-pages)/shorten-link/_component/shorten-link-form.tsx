"use client"

import type { TLink } from "@/lib/types"
import { shortenLinkAction } from "@/action/link-action"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { SubmitButton } from "@/components/shared/button/form-button"


export function ShortenLinkForm() {

  const clientAction = async (formData: FormData) => {
    const data = {
      link: formData.get("url"),
      // length: formData.get("range") as unknown as Number,
      length: 10,
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
        action={clientAction}
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
        <SubmitButton />
      </form>
    </div>
  )
}
