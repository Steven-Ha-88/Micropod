import styled from "styled-components"
import { motion } from "framer-motion"

export const NavModuleStyles = styled.nav`
  .nav {
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 20px 200px;
    background-color: white;

    @media (max-width: 480px) {
      padding: 20px;
    }

    // @media (min-width: 1024px) {
    //   padding-top: 50px;
    // }

    @media (min-width: 1440px) {
      padding-top: 40px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 100%;
  }

  .menu {
    background-color: #fcd667;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px 60px;
    display: flex;
    align-items: center;
  }

  .web-menu {
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .primary-menu {
    margin-top: 0px;
    margin-bottom: 0px;

    li {
      display: inline-block;
      margin-left: 25px;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 700;

      a {
        text-decoration: none;
        color: #5c5c5c;
        :hover {
          color: var(--primary);
        }
      }
    }
  }
`

export const NavTopLevel = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li,
  > li > button {
    text-transform: capitalize;
    font-size: var(--h2);
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease;

    a {
      text-decoration: none;
      color: #fff;
    }

    span {
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
      > a {
        color: var(--primary);
      }
    }
  }

  > li {
    &.open {
      > button > svg {
        transform: rotate(180deg);
      }
    }
  }

  > li > button {
    background-color: transparent;
    padding: 0;
    color: #fff;
    border: none;
    font-family: "Heebo", sans-serif;
    display: flex;
    align-items: center;
  }

  > li > button > svg {
    font-size: 22px;
    margin-left: 6px;
    color: var(--primary);
    transition: transform 0.3s ease;

    @media (min-width: 768px) {
      font-size: 26px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }
`

export const HamburgerStyles = styled(motion.button)`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  outline: none;
  z-index: 999;

  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }

  .bar {
    display: block;
    background-color: #7e7474;
    height: 2px;
    border-radius: 2px;

    &:nth-of-type(2) {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`

export const LogoStyles = styled.div`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }

  span {
    color: var(--primary);
  }

  &:hover,
  &:focus {
    a {
      color: var(--primary);
    }
  }

  .logo {
    display: flex;
    width: 200px;

    @media (max-width: 480px) {
      width: 170px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`
