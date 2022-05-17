import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"

import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

const Footer = () => {
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>

        <FooterMenuStyles className="footer__menu products__menu">
          <h5>
            <Link to="/products">
              All Products<span>.</span>
            </Link>
          </h5>
        </FooterMenuStyles>
      </div>
    </FooterStyles>
  )
}

export default Footer
