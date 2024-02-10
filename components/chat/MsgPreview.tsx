import { ChatPreviewProps } from "@/services/interface.service"
import React from "react"

export default function MsgPreview({ msg, clsName }: ChatPreviewProps) {
  return (
    <div className={`msg-preview ${clsName}  grid`}>
      <img src={msg.profileImgUrl}></img>
      <p className="flex gap-2">
        <span className="msg-user">{msg.username}</span>
        <span
          className="msg-txt"
          style={{ textShadow: "none", fontWeight: 400 }}
        >
          {msg.txt}
        </span>
      </p>
      <p className="">{msg.sentAt}</p>
    </div>
  )
}
