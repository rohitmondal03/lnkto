"use client"

import type { TLink } from "@/lib/types"
import { shortenLinkAction } from "@/lib/action/shorten-link-action"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { SubmitButton } from "@/components/shared/button/submit-button"


export function ShortenLinkForm() {

  const clientAction = async (formData: FormData) => {
    const data = {
      link: formData.get("url"),
      length: 10
    }

    const short = await shortenLinkAction(data as TLink);

    toast({
      title: "Link shortened",
      description: "https://lnkto.vercel.app" + short.path,
    })
  }


  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">
        Link Shortener
      </h1>
      <form
        className="space-y-4"
        action={clientAction}
      >
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
            placeholder="Enter a long URL"
            autoComplete="off"
            className="w-full"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
