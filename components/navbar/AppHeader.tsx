import React from "react"
import { LiaSignInAltSolid } from "react-icons/lia"

export default function AppHeader() {
  return (
    <section className="app-header flex justify-end items-center mr-3">
      <div className="nav-icon flex items-center">
        <h1>Login/Sign-Up</h1>
        <LiaSignInAltSolid size={40} />
      </div>
    </section>
  )
}
