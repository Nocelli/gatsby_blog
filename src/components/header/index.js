import { Link, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import React from "react"

import "./styles.css"

const Header = ({ siteTitle }) => (
  <header id='header'>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link> 
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
