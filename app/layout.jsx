import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "InfiniteClips - Descarga Videos MP4 y MP3 Gratis | Todas las Plataformas",
  description:
    "Descarga videos de YouTube, TikTok, Instagram, Facebook y más de 20 plataformas en formato MP4 o MP3. Gratis, rápido y sin registro. Todas las calidades disponibles.",
  keywords:
    "descargar videos, youtube downloader, tiktok downloader, instagram downloader, mp4, mp3, video converter, descarga gratis",
  authors: [{ name: "InfiniteClips" }],
  creator: "InfiniteClips",
  publisher: "InfiniteClips",
  robots: "index, follow",
  openGraph: {
    title: "InfiniteClips - Descarga Videos MP4 y MP3 Gratis",
    description: "Descarga videos de YouTube, TikTok, Instagram y más plataformas en MP4 o MP3. Gratis y sin registro.",
    type: "website",
    locale: "es_ES",
    siteName: "InfiniteClips",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfiniteClips - Descarga Videos MP4 y MP3 Gratis",
    description: "Descarga videos de YouTube, TikTok, Instagram y más plataformas en MP4 o MP3. Gratis y sin registro.",
  },
  alternates: {
    canonical: "https://infiniteclips.online",
  },
  generator: "InfiniteClips App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
