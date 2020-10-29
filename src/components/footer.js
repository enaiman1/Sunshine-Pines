import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Row, Col, Image } from "react-bootstrap"

import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faConnectdevelop, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  // const element = 
  return (
    <footer className={footerStyles.footer}>
      <Row>
        <p>Created by {data.site.siteMetadata.author}, © 2020 </p>
      </Row>
    <Row>
      <Col lg={1} md={2}>
      <p>
        <Link
          href="https://github.com/enaiman1/Sunshine-Pines"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.link}
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </Link>
      </p>
      </Col>
      <Col lg={1} md={2}>
        <p>
        <Link
          href="https://ericnaiman.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.link}
        >
          <FontAwesomeIcon icon={faConnectdevelop} size="3x" />
        </Link>
      </p>
      </Col>
      <Col lg={1} md={2}>
        <p>
        <Link
          href="https://www.linkedin.com/in/enaiman1/"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.link}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
        </Link>
      </p>
      </Col>
    </Row>
      
      
    
    </footer>
  )
}

export default Footer
