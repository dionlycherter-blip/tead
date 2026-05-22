"use client"

import React from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type MediaViewerProps = {
  src: string
  type?: "image" | "video"
  alt?: string
  title?: string
  poster?: string
  className?: string
  children?: React.ReactNode
}

export default function MediaViewer({
  src,
  type,
  alt,
  title,
  poster,
  className,
  children,
}: MediaViewerProps) {
  const inferredType = type || (/\.mp4$/i.test(src) ? "video" : "image")

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? (
          <>{children}</>
        ) : inferredType === "image" ? (
          <img
            src={src}
            alt={alt ?? title ?? "image"}
            className={cn("w-full h-36 object-cover rounded-md cursor-pointer", className)}
          />
        ) : (
          <div className={cn("relative w-full h-36 bg-black rounded-md flex items-center justify-center cursor-pointer overflow-hidden", className)}>
            {poster ? (
              <img src={poster} alt={alt ?? title ?? "video thumbnail"} className="w-full h-full object-cover" />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black/30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-95">
                <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
              </svg>
            </div>
          </div>
        )}
      </DialogTrigger>

      <DialogContent>
        {title && <DialogTitle>{title}</DialogTitle>}

        <div className="w-full flex justify-center items-center">
          {inferredType === "video" ? (
            <video controls className="max-h-[70vh] max-w-full" src={src} poster={poster} />
          ) : (
            <img src={src} alt={alt ?? title ?? "image"} className="max-h-[70vh] max-w-full object-contain" />
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <DialogClose className="rounded bg-muted px-4 py-2 text-sm">ปิด</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
