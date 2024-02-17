import React, { useState } from "react"
import MsgPreview from "./MsgPreview"
import { utilService } from "@/services/util.service"
import { demoChat, loggedInUserDemo } from "@/services/demo.data.service"

export default function ChatIndex() {
  return (
    <section className="chat-index">
      <div className="chat-list">
        {demoChat.map((msg) => (
          <MsgPreview
            msg={{
              username: msg.username,
              txt: msg.txt,
              profileImgUrl: msg.profileImgUrl,
              sentAt: msg.sentAt,
            }}
            clsName={
              msg.username === loggedInUserDemo.username ? "right" : "left"
            }
          />
        ))}
      </div>
      <article className="chat-container">
        <textarea
          className="chat-input"
          placeholder="Enter text here..."
        ></textarea>
        <button type="submit">Send</button>
      </article>
    </section>
  )
}
