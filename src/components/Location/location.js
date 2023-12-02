import * as React from "react"
import { LocationStyles } from "./locationStyles"

const Location = () => {
  return (
    <LocationStyles className="section">
      <div className="text">
        <h1 className="title">
          Find us<span style={{ color: "var(--primary)" }}>.</span>
        </h1>
        <div className="line"></div>
        <div className="content">We are located inside WingSing restaurant</div>
        <div className="address">
          <div className="details">
            <h2>WingSing</h2>
            <p>78 George Ln</p>
            <p>London</p>
            <p>E18 1JJ</p>

            <div className="opening-hours">
              <h6>- Opening Hours -</h6>
              <p>Monday 12-10:30pm</p>
              <p>Tuesday Closed</p>
              <p>Wednesday 12-10:30pm</p>
              <p>Thursday 12-10:30pm</p>
              <p>Friday 12-11pm</p>
              <p>Saturday 12-11pm</p>
              <p>Sunday 4pm-10:30pm</p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.7266295719637!2d0.02586191597406811!3d51.59157341236582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a736de07cfd1%3A0xd072c4637ad093ba!2sWing%20Sing!5e0!3m2!1sen!2suk!4v1654604592285!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map of little oobae corner"
            ></iframe>
          </div>
        </div>
      </div>
    </LocationStyles>
  )
}

export default Location
