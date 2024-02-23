import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@/assets/_main.scss"
import Navbar from "@/components/navbar/Navbar"
import AppHeader from "@/components/navbar/AppHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chat.it",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app-container grid">
          <Navbar />
          <AppHeader />
          {children}
        </main>
      </body>
    </html>
  )
}
