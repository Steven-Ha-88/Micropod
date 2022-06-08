import * as React from "react"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"

const BasicTextModule = ({ title, content, link, linkText }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="text">
        <div className="title">
          {title}
          <span style={{ color: "var(--primary)" }}>.</span>
        </div>
        <div className="line"></div>
        <div className="content">{content}</div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
