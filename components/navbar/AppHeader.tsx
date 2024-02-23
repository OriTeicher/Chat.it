import React from "react"
import { LiaSignInAltSolid } from "react-icons/lia"
import Link from "next/link"
export default function AppHeader() {
  return (
    <section className="app-header flex justify-end items-center ">
      <div className="nav-icon ">
        <Link href={"/login"}>
          <LiaSignInAltSolid size={45} />
        </Link>
      </div>
    </section>
  )
}
