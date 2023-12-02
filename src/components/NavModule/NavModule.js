import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import MenuContext from "../MenuContext"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import logo from "../../../static/logos/micropod_logo.png"

import {
  NavModuleStyles,
  NavTopLevel,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
} from "./NavAnim"

const NavModule = () => {
  // const featuredProduct = useFeaturedProduct()

  const [isOpen, setNav] = useContext(MenuContext)
  const [subNavIsOpen, setSubNav] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  const toggleSubNav = () => {
    setSubNav((subNavIsOpen) => !subNavIsOpen)
  }

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={isOpen ? " open" : ""}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          <div className="web-menu">
            <ul className="primary-menu">
              <li>
                <a href={"/"}>{"home"}</a>
              </li>
              {menuItems.map((item) => (
                <li key={item.text}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <LogoStyles>
            <a href="/">
              <div className="logo">
                <img src={logo} alt="little oobae corner logo" />
              </div>
              {/* Kelvin Carmichael
              <span>.</span> */}
            </a>
          </LogoStyles>
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          <li>
            <a href="/">
              home<span>.</span>
            </a>
          </li>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
