"use client"
import HomeContent from "@/components/home/HomeContent"
import HomeIcons from "@/components/home/HomeIcons"
import { db } from "@/services/db.service"
import React, { useEffect, useState } from "react"

export default function Home() {
  const [selectedContent, setSelectedContent] = useState<string>("chat")

  const onSelectIcon = (iconStr: string) => {
    setSelectedContent(iconStr)
  }

  return (
    <section className="homepage-container text-center text-5xl">
      <HomeContent info={selectedContent} />
      <HomeIcons onSelectIcon={onSelectIcon} />
    </section>
  )
}
