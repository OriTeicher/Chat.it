"use client"
import React, { useState } from "react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <section className="login-container">
      <form className="login-form relative">
        <h1>Chat.it</h1>
        <input
          type="text"
          placeholder="Username..."
          className="ps focus:outline-none text-slate-950"
        />
        <input
          type="text"
          placeholder="Password..."
          className="focus:outline-none text-slate-950"
        />

        <input
          style={{
            opacity: isLogin ? 0.4 : 1,
            pointerEvents: isLogin ? "none" : "auto",
            transition: "0.2s opacity ease-in-out",
          }}
          type="text"
          placeholder={isLogin ? "" : "Confirm Password..."}
          className=" ps focus:outline-none text-slate-950"
        />

        <div className="bottom-form-content">
          <p onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}>
            {isLogin
              ? "Not a member in Chat.it? Sign-Up!"
              : "Already a member in Chat.it? Login!"}
          </p>
          <button type="submit">{isLogin ? "Login" : "Sign-up"}</button>
        </div>
      </form>
    </section>
  )
}
