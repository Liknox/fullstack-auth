import type { Metadata } from "next"

import { SettingsForm } from "@/features/user/components"

export const metadata: Metadata = {
   title: "Profile Settings"
}

export default function SettingsPage() {
   return <SettingsForm />
}
