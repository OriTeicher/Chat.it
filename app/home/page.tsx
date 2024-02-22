import HomeContent from "@/components/home/HomeContent"
import HomeIcons from "@/components/home/HomeIcons"
import React from "react"
import { IoChatboxEllipsesOutline } from "react-icons/io5"

export default function Home() {
  return (
    <section className="homepage-container col-span-3 text-center mt-20 text-5xl flex flex-col items-center">
      <HomeContent />
      <HomeIcons />
    </section>
  )
}
