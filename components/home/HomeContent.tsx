import React from "react"
import Loader from "../utils/Loader"
import { homeService } from "@/services/home.service"

interface HomeContentProps {
  info: string
}

export default function HomeContent({ info }: HomeContentProps) {
  const displayedMsg = homeService.getIconMsg(info)
  if (!info) return <Loader />
  return (
    <>
      <article className="home-content">
        <h1>
          <span>Welcome to Chat.it !</span>
          <span>Chat & Play platform</span>
        </h1>
      </article>
      <p className="intro-details">{displayedMsg}</p>
    </>
  )
}
// This is the ugly blink
