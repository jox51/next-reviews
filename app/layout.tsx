import type { ReactNode } from "react"
import type { Metadata } from "next"
import Navbar from "../components/Navbar"
import "./globals.css"
import { orbitron, exo2 } from "./fonts"

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer"
  },
  description: "Only the best indie games, reviewed for you"
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 px-8 py-2 flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-4 grow">{children}</main>

        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  )
}
