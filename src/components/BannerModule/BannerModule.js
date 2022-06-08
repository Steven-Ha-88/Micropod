import * as React from "react"
import { BannerModuleStyles } from "./BannerModuleStyles"

const BannerModule = () => {
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
