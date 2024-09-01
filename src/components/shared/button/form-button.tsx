import { useFormStatus } from 'react-dom'
import { Loader } from "lucide-react"

import { Button } from '@/components/ui/button'


export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? <Loader /> : "Hit 'Enter' to shoreten link"}
    </Button>
  )
}