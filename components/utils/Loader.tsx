import React from "react"
import { Comment } from "react-loader-spinner"

export default function Loader() {
  return (
    <Comment
      backgroundColor="darkgray"
      height="150"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperClass="loader"
    />
  )
}
