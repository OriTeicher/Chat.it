export interface ChatPreviewProps {
  msg: ChatMsg
  clsName: string
}

export interface ChatMsg {
  id?: string
  txt: string
  username: string
  profileImgUrl: string
  sentAt: string
}

export interface HomeIconStyle {
  color: {
    selected: string
    default: string
  }
  size: {
    small: number
    medium: number
    large: number
  }
}

export interface Contact {
  id: string
  name: string
  profileImgUrl: string
  lastMsg: string
  seenAt: Date
}
