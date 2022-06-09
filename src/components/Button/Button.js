import React from "react"
import { ButtonStyles } from "./buttonStyles"

const Button = ({ text }) => {
  return <ButtonStyles type="submit">{text}</ButtonStyles>
}

export default Button
