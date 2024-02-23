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
    selected: "RGBA(135, 206, 250, 1)"
    default: "#FFF"
  }
  size: {
    small: 20
    medium: 30
    large: 40
  }
}
