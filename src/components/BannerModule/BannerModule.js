import * as React from "react"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"

const BannerModule = () => {
  return (
    <>
      <BannerModuleStyles>
        <div className="banner__image">
          <StaticImage
            className="image"
            src="https://imgur.com/Dt5Y8Mf.jpg"
            alt="bubble-tea/dessert"
            placeholder="blurred"
            imgStyle={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="banner__description">
          <div className="content">
            <h1 className="title">
              Great Things Come
              <br /> In Small Sizes
            </h1>
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
