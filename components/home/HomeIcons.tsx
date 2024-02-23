"use client"
import React, { useState, useEffect } from "react"
import { BsChatDotsFill as ChatSVG } from "react-icons/bs"
import { BiSolidJoystick as JoystickSVG } from "react-icons/bi"
import { BsKeyboardFill as KeyboardSvg } from "react-icons/bs"
import { HomeIconStyle } from "@/services/interface.service"
import Loader from "../utils/Loader"

interface HomeIconsProps {
  onSelectIcon: (iconStr: string) => void
}

export default function HomeIcons({ onSelectIcon }: HomeIconsProps) {
  const [selectedContent, setSelectedContent] = useState("chat")

  const handleSelectedContent = (selectedIcon: string) => {
    setSelectedContent((prevState) => (prevState = selectedIcon))
    onSelectIcon(selectedIcon)
  }

  const iconStyle: HomeIconStyle = {
    color: {
      selected: "lightskyblue",
      default: "#FFF",
    },
    size: {
      small: 80,
      medium: 100,
      large: 110,
    },
  }

  if (!iconStyle.color || !iconStyle.size) return <Loader />
  return (
    <article className="home-icons-container">
      <JoystickSVG
        size={iconStyle.size.large}
        onClick={() => handleSelectedContent("joystick")}
        color={
          selectedContent === "joystick"
            ? iconStyle.color.selected
            : iconStyle.color.default
        }
      />
      <ChatSVG
        size={iconStyle.size.medium}
        onClick={() => handleSelectedContent("chat")}
        color={
          selectedContent === "chat"
            ? iconStyle.color.selected
            : iconStyle.color.default
        }
      />
      <KeyboardSvg
        size={iconStyle.size.large}
        onClick={() => handleSelectedContent("keyboard")}
        color={
          selectedContent === "keyboard"
            ? iconStyle.color.selected
            : iconStyle.color.default
        }
      />
    </article>
  )
}
