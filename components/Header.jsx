"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export default function Header({ isDarkMode, toggleTheme, themeClasses }) {
  return (
    <header
      className={` backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Infinito animado */}
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
                <defs>
                  {/* Gradiente multicolor bonito */}
                  <linearGradient id="gradient-path" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8a2be2" />   {/* violeta */}
                    <stop offset="25%" stopColor="#e94057" />  {/* fucsia */}
                    <stop offset="50%" stopColor="#ff7e5f" />  {/* coral */}
                    <stop offset="75%" stopColor="#fdbb2d" />  {/* dorado */}
                    <stop offset="100%" stopColor="#00c9ff" /> {/* turquesa */}
                  </linearGradient>
                </defs>

                {/* Infinito de colores */}
                <path
                  d="M20,50 C20,30 45,30 50,50 C55,70 80,70 80,50 C80,30 55,30 50,50 C45,70 20,70 20,50 Z"
                  stroke="url(#gradient-path)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Línea blanca que recorre infinitamente */}
                <path
                  d="M20,50 C20,30 45,30 50,50 C55,70 80,70 80,50 C80,30 55,30 50,50 C45,70 20,70 20,50 Z"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="60 300"
                  className="animate-travel"
                />
              </svg>
            </div>
            <h1 className={`text-2xl font-bold ${themeClasses.text}`}>InfiniteClips</h1>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes travel {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -360;
          }
        }
        .animate-travel {
          animation: travel 3s linear infinite;
        }
      `}</style>
    </header>
  )
}
