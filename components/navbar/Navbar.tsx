"use client"
import React, { useState } from "react"
import { GoHome } from "react-icons/go"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { GoQuestion } from "react-icons/go"

export default function Navbar() {
  const [selectedIcon, setSelectedIcon] = useState<string>("home")

  const icons = [
    { Icon: GoHome, label: "home" },
    { Icon: IoChatbubbleEllipsesOutline, label: "chat" },
    { Icon: GoQuestion, label: "question" },
  ]

  const handleIconClick = (label: string) => {
    setSelectedIcon((prevLabel: string) => (prevLabel = label))
  }

  return (
    <nav className="w-full">
      {icons.map(({ Icon, label }) => (
        <div
          key={label}
          className={`nav-icon ${selectedIcon === label ? "selected" : ""}`}
          onClick={() => handleIconClick(label)}
        >
          <Icon size={40} />
        </div>
      ))}
    </nav>
  )
}
