import { LuLoaderCircle } from "react-icons/lu"

export function Loading() {
   return (
      <div className="flex items-center justify-center text-sm">
         <LuLoaderCircle className="mr-2 size-5 animate-spin" />
         Loading...
      </div>
   )
}
