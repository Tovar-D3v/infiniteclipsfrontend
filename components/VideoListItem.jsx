"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Video, Play, Clock, Download, X, Trash } from "lucide-react"
import PlatformIcon from "@/components/PlatformIcon"
import { extractPlatformName } from "@/components/extractPlatformName"

export default function VideoListItem({ video, handleDownload, handleDelete, themeClasses }) {
  const [format, setFormat] = useState(video.format)
  const [quality, setQuality] = useState(video.quality)
  const [startTime, setStartTime] = useState(video.startTime)
  const [endTime, setEndTime] = useState(video.endTime)

  const qualityOptions = video.info?.calidades_video || []
  const bitrateOptions = video.info?.calidades_audio || []

  const handleDownloadClick = () => {
    handleDownload(video.id, format, quality, startTime, endTime)
  }

  return (
    <Card className={`${themeClasses.previewBg} overflow-hidden shadow-xl relative`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleDelete(video.id)}
        className="absolute top-2 right-2 rounded-full p-2 text-white hover:bg-red-500/10"
      >
        <Trash className="h-4 w-4" />
      </Button>
      <CardContent className="p-6 py-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 relative group">
              {video.info.thumbnail ? (
                <img 
                  src={video.info.thumbnail} 
                  alt="Video Thumbnail"
                  className="w-40 h-24 object-cover rounded-lg"
                  onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/160x96/6B7280/F9FAFB?text=No+Preview";
                  }}
                />
              ) : (
                <div className={`w-40 h-24 bg-gray-200 dark:bg-gray-800 rounded-lg border ${themeClasses.cardBorder} flex items-center justify-center`}>
                  <Video className="h-10 w-10 text-gray-500" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Play className={`h-8 w-8 ${themeClasses.text}`} />
              </div>
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h3 className={`font-semibold ${themeClasses.text} text-lg truncate`}>
                {video.info.title}
              </h3>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="outline" className={`${themeClasses.badgeBg} px-3 py-1 flex items-center`}>
                  <PlatformIcon platform={extractPlatformName(video.url)} />
                  {extractPlatformName(video.url)}
                </Badge>
                <div className={`flex items-center ${themeClasses.textSecondary}`}>
                  <Clock className="h-3 w-3 mr-1" />
                  {video.info.duration}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className={`text-sm font-semibold ${themeClasses.text} uppercase tracking-wide`}>
                  Formato
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={format === "mp4" ? "default" : "outline"}
                    onClick={() => setFormat("mp4")}
                    className={`py-4 transition-all duration-200 ${
                      format === "mp4" ? themeClasses.buttonPrimary : themeClasses.buttonSecondary
                    }`}
                  >
                    MP4
                  </Button>
                  <Button
                    variant={format === "mp3" ? "default" : "outline"}
                    onClick={() => setFormat("mp3")}
                    className={`py-4 transition-all duration-200 ${
                      format === "mp3" ? themeClasses.buttonPrimary : themeClasses.buttonSecondary
                    }`}
                  >
                    MP3
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <label className={`text-sm font-semibold ${themeClasses.text} uppercase tracking-wide`}>
                  {format === "mp4" ? "Calidad" : "Bitrate"}
                </label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className={`w-full px-4 py-4 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-lg ${themeClasses.inputText} focus:outline-none focus:ring-2 focus:ring-slate-300/20 focus:border-slate-300 transition-all duration-200`}
                >
                  {(format === "mp4" ? qualityOptions : bitrateOptions).map((option) => (
                    <option
                      key={option}
                      value={option}
                      className={`${themeClasses.inputBg} ${themeClasses.inputText}`}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className={`text-sm font-semibold ${themeClasses.text} uppercase tracking-wide`}>
                  Tiempo de inicio (MM:SS)
                </label>
                <Input
                  type="text"
                  placeholder="00:00"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className={`py-4 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-lg ${themeClasses.inputText}`}
                />
              </div>
              <div className="space-y-4">
                <label className={`text-sm font-semibold ${themeClasses.text} uppercase tracking-wide`}>
                  Tiempo de fin (MM:SS)
                </label>
                <Input
                  type="text"
                  placeholder="00:00"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className={`py-4 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-lg ${themeClasses.inputText}`}
                />
              </div>
            </div>

            {video.isDownloading ? (
              <div className="space-y-4">
                <p className={`text-center font-medium ${themeClasses.textSecondary}`}>
                  {video.statusMessage}
                </p>
              </div>
            ) : (
              <Button
                onClick={handleDownloadClick}
                disabled={!video.info}
                className={`w-full py-6 text-lg font-semibold ${themeClasses.buttonPrimary} disabled:bg-zinc-700 disabled:text-zinc-400 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
                size="lg"
              >
                <Download className="h-6 w-6 mr-3" />
                Descargar {format.toUpperCase()}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}