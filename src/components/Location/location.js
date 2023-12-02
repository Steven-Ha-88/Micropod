import * as React from "react"
import { LocationStyles } from "./locationStyles"

const Location = () => {
  return (
    <LocationStyles className="section">
      <div className="text">
        <h1 className="title">
          Distros and Stores<span style={{ color: "var(--primary)" }}>.</span>
        </h1>
        <div className="line"></div>
        <div className="content">We are located inside WingSing restaurant</div>
      </div>
    </LocationStyles>
  )
}

export default Location
