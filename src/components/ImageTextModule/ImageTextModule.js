import * as React from "react"
import Button from "../Button/Button"
import { ImageTextStyles } from "./ImageTextStyles"
import { Link } from "gatsby"

const ImageTextModule = ({ title, content, link, linkText }) => {
  return (
    <ImageTextStyles className="section">
      <div className="container">
        <div className="text">
          <div className="title">{title}</div>
          <div className="line"></div>
          <div className="content">{content}</div>
        </div>
        <div className="image">
          <img src="https://imgur.com/YDlsHeO.jpg" alt="cake" />
        </div>
      </div>
    </ImageTextStyles>
  )
}

export default ImageTextModule
