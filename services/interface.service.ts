export interface ChatPreviewProps {
  msg: ChatMsg
  clsName: string
}

export interface ChatMsg {
  txt: string
  username: string
  profileImgUrl: string
  sentAt: string
}
