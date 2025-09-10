"use client"

import React from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function StatusAlert({ statusMessage, isError }) {
  if (!statusMessage) {
    return null
  }

  return (
    <Alert
      className={`border-2 ${isError ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"}`}
    >
      {isError ? (
        <AlertCircle className="h-5 w-5 text-red-400" />
      ) : (
        <CheckCircle className="h-5 w-5 text-green-400" />
      )}
      <AlertDescription
        className={`text-base font-medium ${isError ? "text-red-300" : "text-green-300"}`}
      >
        {statusMessage}
      </AlertDescription>
    </Alert>
  )
}
