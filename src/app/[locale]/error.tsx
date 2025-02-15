"use client"

import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }){

    return (
        <div>
            <h1 className="text-red-500 font-semibold">{error.message}</h1>
            <Button className="bg-slate-400" onClick={()=>reset}>Try again</Button>
        </div>
    )
 
}