import * as React from "react"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"

const BasicTextModule = ({ title, content, link, linkText }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="text">
        <h1 className="title">
          {title}
          <span style={{ color: "var(--primary)" }}>.</span>
        </h1>
        <div className="line"></div>
        <div className="content">{content}</div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
