import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  return (
    <>
      <BannerModuleStyles>
        <div className="banner__image"></div>
        <div className="banner__description">
          <div className="content">
            <div className="title">
              Natural,
              <br /> Healthy and Freshly Brewed
            </div>
            <div className="text">
              Our mission is to provide the best quality – natural, healthy,
              freshly brewed – tea and beverages that are tailored to individual
              taste and preference.
            </div>
            <div className="line"></div>
          </div>
        </div>
      </BannerModuleStyles>
    </>
  )
}

export default BannerModule
