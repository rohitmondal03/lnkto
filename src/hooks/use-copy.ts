import { toast } from "@/components/ui/use-toast";


export function useCopy() {
  async function copyText (text: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Link copied to clipboard !!",
        description: "You can paste or share this link with anyone !!",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: err as string
      })
    }
  }

  return copyText;
}