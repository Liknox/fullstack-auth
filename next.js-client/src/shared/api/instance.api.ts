import { FetchClient } from "../utils"

export const api = new FetchClient({
   baseUrl: process.env.APPLICATION_URL as string,
   options: { credentials: "include" }
})
