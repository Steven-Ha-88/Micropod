import * as React from "react"
import { ImageTextStyles } from "./ImageTextStyles"
import MenuButton from "./../Button/button"

const ImageTextModule = ({ title, content, menu, image, about }) => {
  return (
    <ImageTextStyles about={about} className="section">
      <div className="container">
        <div className="text">
          <div className="title">
            {title}
            <span style={{ color: "var(--primary)" }}>.</span>
          </div>
          <div className="line"></div>
          <div className="content">
            {content}
            {menu ? <MenuButton text="Menu" /> : null}
          </div>
        </div>
        <div className="image">
          <img src={image} alt="cake" />
        </div>
      </div>
    </ImageTextStyles>
  )
}

export default ImageTextModule
