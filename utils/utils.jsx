export const extractPlatformName = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube"
    if (url.includes("vimeo.com")) return "Vimeo"
    if (url.includes("twitch.tv")) return "Twitch"
    if (url.includes("facebook.com")) return "Facebook"
    return "Desconocida"
  }
  