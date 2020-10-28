import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"
import { Container, Row, Col, Image } from "react-bootstrap"

import About1 from "../assets/about1.jpg"
import About2 from "../assets/about2.jpg"
import About3 from "../assets/about3.jpg"
import About4 from "../assets/about4.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <main className={aboutStyles.mainBody}>
        <Container>
          
          <Row>
            <Col md={7}>
            <h2>Who is Sunshine Pines of Florida</h2>
          <p>
            Our mission is to serve people — residents, team members and our
            neighbors in the greater community. As a not-for-profit
            organization, our sole purpose is to serve older adults, by
            providing beautiful and quality environments to enhance lifestyles
            at every level of independence.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum.
            Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
            Integer eu nibh at nisi ullamcorper sagittis id vel leo.
          </p>
          <h3>
            Happy is having <span>fantastic</span> choices.
          </h3>
          <p>
            Integer feugiat faucibus libero, at maximus nisl suscipit posuere.
            Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed
            sollicitudin elit convallis. Cras pharetra mi tristique sapien
            vestibulum lobortis. Nam eget bibendum metus, non dictum mauris.
            Nulla at tellus sagittis, viverra est a, bibendum metus.
          </p>
            </Col>
            <Col md={5}>
              <Row>
                <Col md={6} sm={12}>
                  <p>
                    <Image src={About1} alt="" style={{ width: "250px", height: "150px"}} fluid />
                  </p>
                </Col>
                <Col md={6} sm={12}>
                  <p>
                    <Image src={About2} alt="" style={{ width: "250px", height: "150px"}} fluid />
                  </p>
                </Col>
                </Row>
                <Row>
                <Col md={6} sm={12}>
                  <p>
                    <Image src={About3} alt="" style={{ width: "250px", height: "150px"}} fluid />
                  </p>
                </Col>
                <Col md={6} sm={12}>
                  <p>
                    <Image src={About4} alt="" style={{ width: "250px", height: "150px"}} fluid />
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default AboutPage

// 
// style={{ width: "150px", height: "150px"}}
// style={{ width: "150px", height: "150px"}}
// style={{ width: "150px", height: "150px"}}
