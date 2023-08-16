"use client"
import { useState } from "react"
import { LinkIcon } from "@heroicons/react/20/solid"

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (): void => {
    navigator.clipboard.writeText(window.location.href)
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }
  return (
    <button
      onClick={handleClick}
      className="flex gap-3 items-center border px-2 py-1 rounded text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "link-copied" : "share-link"}
    </button>
  )
}

export default ShareLinkButton
