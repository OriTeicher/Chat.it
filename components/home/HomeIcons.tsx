"use client"
import React, { useState } from "react"
import { BsChatDotsFill } from "react-icons/bs"
import { BiSolidJoystick } from "react-icons/bi"
import { BsKeyboardFill } from "react-icons/bs"

export default function HomeIcons() {
  const [selectedContent, setSelectedContent] = useState("")

  return (
    <article className="home-icons-container">
      <BsChatDotsFill />
      <BiSolidJoystick />
      <BsKeyboardFill />
      <p className="text-3xl absolute bottom-0 mb-10">{selectedContent}</p>
    </article>
  )
}
