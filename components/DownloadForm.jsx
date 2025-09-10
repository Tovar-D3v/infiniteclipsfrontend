"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, Loader2 } from "lucide-react";

export default function DownloadForm({
  url,
  setUrl,
  handleSearch,
  isLoadingInfo,
  themeClasses,
  isDarkMode,
}) {
  return (
    <Card
      className={`mb-12 ${themeClasses.background} hover:bg-opacity-70 transition-all duration-300 border-0`}
    >
      <CardHeader className="pb-6">
        <CardTitle
          className={`flex items-center gap-3 text-xl ${themeClasses.text}`}
        >
          <div
            className={`p-2 ${
              isDarkMode ? "bg-white/10" : "bg-gray-900/10"
            } rounded-lg`}
          >
            <Link className={`h-5 w-5 ${themeClasses.text}`} />
          </div>
          Pega tu enlace aquí
        </CardTitle>
        <CardDescription className={`${themeClasses.textSecondary} text-base`}>
          Soportamos múltiples plataformas y formatos de video en alta calidad
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center">
          <Input
            type="url"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={(e) => e.target.select()}
            className={`
    text-lg py-6 flex-1 
    ${themeClasses.inputBg} 
    ${themeClasses.inputBorder} 
    ${themeClasses.inputText} 
    placeholder:${themeClasses.textSecondary} 
    focus:border-slate-300 
    focus:ring-slate-300/20 
    selection:bg-blue-500 selection:text-white 
    transition-all duration-200 border-r-none rounded-r-none
  `}
          />

          <Button
            onClick={handleSearch}
            disabled={!url.trim() || isLoadingInfo}
            className={`py-6 px-8 text-lg font-semibold ${themeClasses.buttonPrimary} disabled:bg-zinc-700 disabled:text-zinc-400 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] rounded-l-none border`}
          >
            {isLoadingInfo ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              "Buscar"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
