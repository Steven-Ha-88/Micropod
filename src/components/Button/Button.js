import React from "react"
import { AnchorStyles } from "./buttonStyles"

const Button = ({ text, href }) => {
  return <AnchorStyles href={href}>{text}</AnchorStyles>
}

export default Button
