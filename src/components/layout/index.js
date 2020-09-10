import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./styles.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id='page-layout'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <footer className='footer'>
          Copyright © {new Date().getFullYear()}, Feito por
          {/* Target _blank é para que o usuário não saia do seu site quando clicar no link,
          apenas abra outra aba/janela */}
          <a className='footer-link' href="https://github.com/Nocelli" target="_blank"> Rafael Nocelli Soares (Guinomo)</a>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
