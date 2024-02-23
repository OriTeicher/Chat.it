export const homeService = {
  getIconMsg,
}

const CHAT_MSG = "Interact with your friends using our chat!"
const JOYSTICK_MSG = "Play with your friends some cool games!"
const KEYBOARD_MSG = "Try to compete online and see who's the fastest typer!"

function getIconMsg(iconStr: string) {
  switch (iconStr) {
    case "keyboard":
      return KEYBOARD_MSG
    case "joystick":
      return JOYSTICK_MSG
    default:
      return CHAT_MSG
  }
}
