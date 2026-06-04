import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Churn Predict — Predict customer churn with 3 data points",
  description: "Upload user activity CSV, get churn predictions and intervention suggestions with minimal setup. Built for early-stage SaaS founders."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4649da13-447e-48c6-8282-f1feeaa57c13"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
