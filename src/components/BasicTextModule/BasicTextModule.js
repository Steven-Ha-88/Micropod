import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = ({ title, content, link, linkText }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="text">
        <div className="title">{title}</div>
        <div className="line"></div>
        <div className="content">{content}</div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
