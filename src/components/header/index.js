import { Link, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React from "react"

import "./styles.css"
import Image from "../image"

function Header({ siteTitle }) {
  return <header id="header">
    <figure className='header-image'>
      <Image />
    </figure>
    <section className='header-text'>
      <h1>
        <Link to="/" id="hash-link">
          {siteTitle}
        </Link>
      </h1>
    </section>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
