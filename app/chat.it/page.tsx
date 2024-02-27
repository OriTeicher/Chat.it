import ChatIndex from "@/components/chat/ChatIndex"
import ContactsInbox from "@/components/chat/ContactsInbox"
import RightMenu from "@/components/navbar/RightMenu"
export default function ChatPage() {
  return (
    <>
      <RightMenu />
      <ChatIndex />
      <ContactsInbox />
    </>
  )
}
