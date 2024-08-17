import { Button } from "@/components/ui/button"
import { ShortenLinkForm } from "./_component/shorten-link-form"
import { CopyIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full px-4 py-8 bg-card">
        <ShortenLinkForm />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-card-foreground">Shortened Link:</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-primary-foreground">
                https://example.com/abc123
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted"
              >
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">
                  Copy
                </span>
              </Button>
            </div>
          </div>
          <div className="border-t pt-4">
            <h2 className="text-lg font-medium text-card-foreground">Recent Links</h2>
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">https://lnkto.vercel.app/def456</span>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
                  <CopyIcon className="w-4 h-4" />
                  <span className="sr-only">Copy</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">https://lnkto.vercel.app/ghi789</span>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
                  <CopyIcon className="w-4 h-4" />
                  <span className="sr-only">Copy</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
