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
