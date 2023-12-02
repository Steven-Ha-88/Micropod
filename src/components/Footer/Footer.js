import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import {
  FaFacebookSquare as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa"
import logo from "../../../static/logos/micropod_logo.png"

const Footer = () => {
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div>
        <img
          style={{ width: "150px" }}
          src={logo}
          alt="little oobae corner logo"
        />
      </div>
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Customer Services</h5>
          <ul>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ's</li>
          </ul>
        </FooterMenuStyles>

        <FooterMenuStyles className="footer__menu social__menu">
          <h5>
            Follow MicroPod<span>.</span>
          </h5>
          <ul>
            <li>
              <a href={``} target="_blank" rel="nofollow noreferrer noopener">
                <Facebook />
              </a>
            </li>

            <li>
              <a href={``} target="_blank" rel="nofollow noreferrer noopener">
                <Instagram />
              </a>
            </li>
          </ul>
        </FooterMenuStyles>
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & developed by{" "}
            <a href={""} target="_blank" rel="noopener noreferrer">
              Steven
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
