import HomeContent from "@/components/home/HomeContent"
import HomeIcons from "@/components/home/HomeIcons"
import React from "react"

export default function Home() {
  return (
    <section className="homepage-container text-center text-5xl  ">
      <HomeContent />
      <HomeIcons />
    </section>
  )
}
