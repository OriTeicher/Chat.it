"use client"
import React, { useState } from "react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <section className="login-container">
      <form className="login-form relative">
        <h1 className="absolute top-0">Chat.it</h1>
        <input
          type="text"
          placeholder="Username..."
          className="text-center focus:outline-none text-slate-950"
        />
        <input
          type="text"
          placeholder="Password..."
          className="text-center focus:outline-none text-slate-950"
        />
        <input
          type="text"
          placeholder="Confirm Password..."
          className="text-center focus:outline-none text-slate-950"
        />
        <div className="bottom-form-content">
          <p>
            {isLogin
              ? "Not a member in Chat.it? Sign-Up!"
              : "Already a member in Chat.it? Login!"}
          </p>
          <button type="submit"> {isLogin ? "Login" : "Sign-Up"}</button>
        </div>
      </form>
    </section>
  )
}
