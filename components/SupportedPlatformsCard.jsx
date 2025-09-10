"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PlatformIcon from "@/components/PlatformIcon"

export default function SupportedPlatformsCard({ themeClasses }) {
  const platformCategories = {
    "Redes Sociales": ["Facebook", "Twitter", "Instagram", "TikTok"],
    "Plataformas de Video": ["YouTube", "Vimeo", "Dailymotion", "BiliBili"],
    "Servicios de Streaming": ["Twitch", "Periscope"],
    "Sitios de Noticias": ["BBC", "CNN", "The New York Times", "RT"],
    "Música y Audio": ["SoundCloud", "Bandcamp"],
    "Contenido Educativo": ["IMDb", "TED", "Khan Academy", "ESPN"],
  }

  return (
    <Card
      className={`overflow-hidden ${themeClasses.cardBg} ${themeClasses.cardBorder} shadow-xl backdrop-blur-sm`}
    >
      <CardHeader className="p-6 border-b border-white/10">
        <CardTitle className={`text-2xl font-bold ${themeClasses.text}`}>
          Plataformas Soportadas
        </CardTitle>
        <CardDescription className={`mt-2 text-base ${themeClasses.textSecondary}`}>
          Descarga videos y audio de más de <span className="font-semibold">1000 sitios</span>, 
          incluyendo estas plataformas populares.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-8">
        {Object.entries(platformCategories).map(([category, platforms]) => (
          <div key={category}>
            <h3
              className={`text-lg font-semibold ${themeClasses.text} uppercase tracking-wide mb-4`}
            >
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl border border-transparent hover:border-slate-400/30 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-20 rounded-full blur-md group-hover:opacity-40 transition duration-300"></div>
                    <PlatformIcon
                      platform={platform}
                      className="relative w-12 h-12 md:w-14 md:h-14 text-current transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className={`mt-3 text-sm font-medium text-center ${themeClasses.text}`}
                  >
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
