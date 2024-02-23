"use client"
import React, { useState } from "react"
import { BsChatDotsFill as ChatSVG } from "react-icons/bs"
import { BiSolidJoystick as JoystickSVG } from "react-icons/bi"
import { BsKeyboardFill as KeyboardSvg } from "react-icons/bs"
import { HomeIconStyle } from "@/services/interface.service"

export default function HomeIcons() {
  const [selectedContent, setSelectedContent] = useState("")

  const handleSelectedContent = (selectedIcon: string) => {
    setSelectedContent((prevState) => (prevState = selectedIcon))
  }

  const { color, size } = {} as HomeIconStyle
  console.log(color, size)

  if (color! || !size) return <Loader />
  return (
    <article className="home-icons-container">
      <JoystickSVG
        size={size.medium}
        onClick={() => handleSelectedContent("joystick")}
        color={selectedContent === "joystick" ? color.selected : color.default}
      />
      <ChatSVG
        size={size.medium}
        onClick={() => handleSelectedContent("chat")}
        color={selectedContent === "chat" ? color.selected : color.default}
      />
      <KeyboardSvg
        size={size.medium}
        onClick={() => handleSelectedContent("keyboard")}
        color={selectedContent === "keyboard" ? color.selected : color.default}
      />
    </article>
  )
}
