import React, { useState } from "react"
import { Link } from "gatsby"

import { NavModuleStyles } from "./NavModuleStyles"
import { motion } from "framer-motion"

import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
} from "./NavAnim"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"

const NavModule = () => {
  const [isOpen, setNav] = useState(false)

  const openNav = () => {
    setNav(!isOpen)
  }
  const closeNav = () => {
    setNav(false)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <motion.button
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={openNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={`hamburger${isOpen ? " open" : ""}`}
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
          </motion.button>

          {title && (
            <div className="logo">
              <Link to="/">
                {title}
                <span>.</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <ul>
          <li onClick={closeNav}>
            <a
              href="https://staging.omegadao.finance"
              activeClassName="menu__item--active"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              app
              <span>.</span>
            </a>
          </li>
          <li onClick={closeNav}>
            <a
              href="https://omegadao.medium.com"
              activeClassName="menu__item--active"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              medium
              <span>.</span>
            </a>
          </li>

          <li onClick={closeNav}>
            <a
              href="https://twitter.com/omegadaofi"
              activeClassName="menu__item--active"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              twitter
              <span>.</span>
            </a>
          </li>
          <li onClick={closeNav}>
            <a
              href="https://discord.com"
              activeClassName="menu__item--active"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              discord
              <span>.</span>
            </a>
          </li>
          <li onClick={closeNav}>
            <a
              href="https://github.com/OmegaDAO"
              activeClassName="menu__item--active"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              github
              <span>.</span>
            </a>
          </li>
        </ul>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
