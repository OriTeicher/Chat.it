import React from "react"
import { LiaSignInAltSolid } from "react-icons/lia"
import Link from "next/link"
export default function AppHeader() {
  return (
    <section className="app-header flex justify-end items-center mr-3">
      <div className="nav-icon flex items-center">
        <h1>Login/Sign-Up</h1>
        <Link href={"/login"}>
          <LiaSignInAltSolid size={40} />
        </Link>
      </div>
    </section>
  )
}
