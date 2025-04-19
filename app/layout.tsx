import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { EmailJSLoader } from "@/components/email-service"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GrowJR - Simulacros para Desarrolladores Junior",
  description:
    "Comunidad que ayuda a desarrolladores junior a conseguir su primera experiencia laboral a través de simulacros reales.",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <EmailJSLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
