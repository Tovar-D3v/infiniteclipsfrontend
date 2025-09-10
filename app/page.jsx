"use client"

import { useState } from "react"
import { getThemeClasses } from "@/components/getThemeClasses"
import SupportedPlatformsCard from "@/components/SupportedPlatformsCard"
import Footer from "@/components/footer"
import Header from "@/components/Header"
import DownloadForm from "@/components/DownloadForm"
import VideoListItem from "@/components/VideoListItem"
import axios from 'axios'

// API base URL
const API_BASE_URL = "http://192.168.0.138:5000/api"

export default function VideoDownloader() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [url, setUrl] = useState("")
  const [videosList, setVideosList] = useState([])
  const [isLoadingInfo, setIsLoadingInfo] = useState(false)
  
  const themeClasses = getThemeClasses(isDarkMode)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleSearch = async () => {
    if (!url.trim() || !(url.startsWith("http://") || url.startsWith("https://"))) {
      alert("Por favor, ingresa un enlace válido.")
      return
    }
    
    setIsLoadingInfo(true)
    
    try {
      const response = await fetch(`${API_BASE_URL}/video_info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error('Error al obtener la información del video.')
      }

      const data = await response.json()
      
      const newVideo = {
        id: Date.now(),
        url: url,
        info: data,
        format: data.calidades_video && data.calidades_video.length > 0 ? "mp4" : "mp3",
        quality: data.calidades_video && data.calidades_video.length > 0 ? data.calidades_video[0] : (data.calidades_audio[0] || ""),
        startTime: "00:00",
        endTime: "00:00",
        isDownloading: false,
        statusMessage: "",
        isError: false,
      }

      setVideosList(prevList => [...prevList, newVideo])
      setUrl("")

    } catch (error) {
      alert("Error: No se pudo obtener la información del video. Por favor, verifica el enlace.")
    } finally {
      setIsLoadingInfo(false)
    }
  }

  const handleDownload = async (id, format, quality, startTime, endTime) => {
    const videoToDownload = videosList.find(video => video.id === id)
    if (!videoToDownload) return

    setVideosList(prevList => prevList.map(video =>
      video.id === id ? { ...video, isDownloading: true, statusMessage: "Iniciando descarga..." } : video
    ))

    try {
      const response = await axios.post(`${API_BASE_URL}/descargar`, {
        url: videoToDownload.url,
        formato: format,
        calidad: quality,
        start_time: startTime,
        end_time: endTime
      }, {
        responseType: 'blob',
      })

      const blob = response.data
      const contentDisposition = response.headers['content-disposition']
      let filename = "video.mp4" 
      if (contentDisposition && contentDisposition.indexOf('filename=') !== -1) {
        filename = contentDisposition.split('filename=')[1].replace(/"/g, '')
      }

      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(downloadUrl)

      setVideosList(prevList => prevList.map(video =>
        video.id === id ? { ...video, isDownloading: false, statusMessage: "¡Descarga completada!" } : video
      ))
    } catch (error) {
      setVideosList(prevList => prevList.map(video =>
        video.id === id ? { ...video, isDownloading: false, isError: true, statusMessage: "Error durante la descarga." } : video
      ))
      console.error("Download Error:", error)
    }
  }

  const handleDelete = (id) => {
    setVideosList(prevList => prevList.filter(video => video.id !== id))
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${themeClasses.background} ${themeClasses.text}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} themeClasses={themeClasses} />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto backdrop-blur-3xl p-6 md:p-12 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance leading-tight text-white dark:text-gray-100 drop-shadow-lg">
              Descarga Videos
              <br />
              <span className="text-indigo-400">en Segundos</span>
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} mb-12 text-pretty max-w-2xl mx-auto leading-relaxed`}>
              Convierte y descarga videos de cualquier plataforma en formato MP4 o MP3 con la mejor calidad disponible
            </p>
          </div>
          <DownloadForm
            url={url}
            setUrl={setUrl}
            handleSearch={handleSearch}
            isLoadingInfo={isLoadingInfo}
            themeClasses={themeClasses}
            isDarkMode={isDarkMode}
          />
          
          {videosList.length > 0 && (
            <div className="mt-8 space-y-6">
              {videosList.map(video => (
                <VideoListItem
                  key={video.id}
                  video={video}
                  handleDownload={handleDownload}
                  handleDelete={handleDelete}
                  themeClasses={themeClasses}
                />
              ))}
            </div>
          )}
          
          <SupportedPlatformsCard themeClasses={themeClasses} />
        </div>
      </main>
      <Footer themeClasses={themeClasses} />
    </div>
  )
}