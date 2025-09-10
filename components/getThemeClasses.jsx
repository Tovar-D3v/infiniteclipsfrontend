export const getThemeClasses = (isDarkMode) => ({
    background: isDarkMode ? "bg-black" : "bg-white",
    text: isDarkMode ? "text-slate-100" : "text-gray-900",
    cardBg: isDarkMode ? "bg-zinc-900/50" : "bg-gray-50",
    cardBorder: isDarkMode ? "border-zinc-800" : "border-gray-200",
    inputBg: isDarkMode ? "bg-zinc-800/50" : "bg-white",
    inputBorder: isDarkMode ? "border-zinc-700" : "border-gray-300",
    inputText: isDarkMode ? "text-slate-100" : "text-gray-900",
    headerBg: isDarkMode ? "bg-black/95" : "bg-white/95",
    headerBorder: isDarkMode ? "border-zinc-800" : "border-gray-200",
    footerBg: isDarkMode ? "bg-zinc-900/50" : "bg-gray-100",
    buttonPrimary: isDarkMode
      ? "bg-slate-100 text-black hover:bg-slate-200"
      : "bg-gray-900 text-white hover:bg-gray-800",
    buttonSecondary: isDarkMode
      ? "bg-zinc-800/50 border-zinc-700 text-slate-100 hover:bg-zinc-700"
      : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50",
    badgeBg: isDarkMode ? "bg-zinc-800/50 text-slate-100 border-zinc-700" : "bg-gray-100 text-gray-900 border-gray-300",
    linkHover: isDarkMode ? "hover:text-slate-100" : "hover:text-gray-900",
    textSecondary: isDarkMode ? "text-zinc-400" : "text-gray-600",
    previewBg: isDarkMode ? "bg-zinc-800/30 border-zinc-700" : "bg-gray-50 border-gray-200",
  });