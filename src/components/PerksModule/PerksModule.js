import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/selfie_side.jpeg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Built For Performance"
          content="Versatile drummer with over 7 years experience playing a diverse range of musical styles such as: Jazz, Latin, fusion, funk, rock & prog and electronic music with various artists and bands. Experienced session drummer able to provide remote sessions"
        >
          {/* <StaticImage
            src="../../../static/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}
          <h2>Drummer</h2>
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Built For Sound"
          content="Professionally trained producer capable of mixing, engineering and recording. Can provide professional Drum & music theory tuition having been classically trained and with years of experience teaching privately and in academic institutes."
        >
          {/* <StaticImage
            src="../../../static/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}{" "}
          <h2>Producer</h2>
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
