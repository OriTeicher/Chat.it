import { utilService } from "./util.service"
const demoImg1 =
  "https://applicants.mta.ac.il/wp-content/uploads/2019/11/yossi.png"
const demoImg2 = "https://xsgames.co/randomusers/assets/avatars/female/1.jpg"

export const demoChat = [
  {
    username: "Alice123",
    txt: "Hey there! How's your day going?",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
  {
    username: "Alice123",
    txt: "Hey there! How's your day going?",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
  {
    username: "Bob87",
    txt: "Hey Alice! It's going well, thanks for asking. How about yours?",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg2,
  },
  {
    username: "Alice123",
    txt: "Not too bad! Just busy with work. Anything exciting happening with you?",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
  {
    username: "Bob87",
    txt: "Well, I just got a new project at work. It's challenging, but I'm enjoying it!",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg2,
  },
  {
    username: "Bob87",
    txt: "Well, I just got a new project at work. It's challenging, but I'm enjoying it!",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg2,
  },

  {
    username: "Alice123",
    txt: "That sounds great! What's the project about?",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
  {
    username: "Bob87",
    txt: "It's a mobile app for tracking fitness goals. I'm pretty excited about it!",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg2,
  },
  {
    username: "Alice123",
    txt: "Wow, that's awesome! I've been trying to get back into a fitness routine. Maybe your app will motivate me!",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
  {
    username: "Bob87",
    txt: "I hope so! If you have any suggestions or feature requests, feel free to let me know.",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg2,
  },
  {
    username: "Alice123",
    txt: "Sure thing! By the way, have you tried that new coffee place downtown? I heard it's fantastic.",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
  {
    username: "Bob87",
    txt: "Not yet, but I've been meaning to. Let's plan to check it out together sometime!",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg2,
  },
  {
    username: "Alice123",
    txt: "Sounds like a plan! I'm looking forward to it.",
    sentAt: utilService.getFormattedTime(new Date()),
    profileImgUrl: demoImg1,
  },
]

export const loggedInUserDemo = {
  username: "Alice123",
  profileImgUrl: demoImg1,
  joinedAt: "15/3/2024",
}
