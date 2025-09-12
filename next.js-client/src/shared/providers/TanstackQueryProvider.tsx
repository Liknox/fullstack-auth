"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"

export function TanstackQueryProvider({
   children
}: PropsWithChildren<unknown>) {
   const client = new QueryClient()

   return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
