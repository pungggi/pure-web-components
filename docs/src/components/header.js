import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="SiteHeader">
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <pure-menu horizontal>
        <Link to="/" className="pure-menu-link pure-menu-heading">
          <h1>PURE</h1>
        </Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link to="/getting-started" className="pure-menu-link">
              Getting Started
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/pure-button" className="pure-menu-link">
              Components
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/" className="pure-menu-link">
              Theming
            </Link>
          </li>
          <li className="pure-menu-item">
            <a
              href="https://github.com/whoisryosuke/pure-web-components"
              className="pure-menu-link"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </pure-menu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Pure Web Components Docs`,
}

export default Header
