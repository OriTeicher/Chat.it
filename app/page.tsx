import Navbar from "../components/navbar/Navbar"
import "../assets/_main.scss"
import ContactsInbox from "@/components/chat/ContactsInbox"
import ChatIndex from "@/components/chat/ChatIndex"
import AppHeader from "@/components/navbar/AppHeader"
import RightMenu from "@/components/navbar/RightMenu"
export default function Home() {
  return (
    <>
      <RightMenu />
      <ChatIndex />
    </>
  )
}
