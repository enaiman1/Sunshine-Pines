import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"
import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import { Container, Row, Col, Image, Carousel, Card } from "react-bootstrap"
import Img from "gatsby-image"
import Organization from "../components/imageOrganization"

import heart from "../assets/heart.png"
import healthcare from "../assets/healthcare.png"
import medicalRecord from "../assets/medicalRecord.png"
import Facility1 from "../assets/facility1.jpg"
import Facility2 from "../assets/facility2.jpg"
import Facility3 from "../assets/facility3.jpg"
import Facility4 from "../assets/facility4.jpg"
import Facility5 from "../assets/facility5.jpg"
import Facility6 from "../assets/facility6.jpg"
import Facility7 from "../assets/facility7.jpeg"
import Facility8 from "../assets/facility8.jpeg"

// graph ql query to place images in carousel
export const query = graphql`
  {
    image1: file(relativePath: { eq: "carousel1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1100, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "carousel2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1100, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "carousel3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1100, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "carousel4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1100, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.heading}>
        <h2 className="text-center">Welcome to Sunshine Pines</h2>
        <h3 className="text-center">
          The sky is the limit for <span>Urban Living At It's Best</span>
        </h3>
      </div>

      <br />

      <Container>
        {/* Carousel starts here */}
        <Carousel>
          <Carousel.Item>
            <Img
              fluid={props.data.image1.childImageSharp.fluid}
              alt="this is the a pup on sup"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={props.data.image2.childImageSharp.fluid}
              alt="this is the a pup on sup"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={props.data.image3.childImageSharp.fluid}
              alt="this is the a pup on sup"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={props.data.image4.childImageSharp.fluid}
              alt="this is the a pup on sup"
            />
          </Carousel.Item>
        </Carousel>

        {/* service offer starts here */}

        <section className={indexStyles.services}>
          <h2 className="text-center">Service offered</h2>
          <Row>
            {/* card 1 */}
            <Col>
              <Card className="m-2">
                <Image
                  src={heart}
                  alt="heart icon"
                  className="card-img-top"
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                  fluid
                />
                <Card.Body>
                  <Card.Title>Short-Term Stay</Card.Title>
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                      consequat urna. Morbi a bibendum metus. Donec scelerisque
                      sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* card 2 */}
            <Col>
              <Card className="m-2">
                <Image
                  src={healthcare}
                  alt="two hands holding a heart"
                  className="card-img-top"
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                  fluid
                />
                <Card.Body>
                  <Card.Title>Residential Stay</Card.Title>
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                      consequat urna. Morbi a bibendum metus. Donec scelerisque
                      sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* card 3 */}
            <Col>
              <Card className="m-2">
                <Image
                  src={medicalRecord}
                  alt="clipboard with a medical symbol on it"
                  className="card-img-top"
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                  fluid
                />
                <Card.Body>
                  <Card.Title>Specialty Programs</Card.Title>
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                      consequat urna. Morbi a bibendum metus. Donec scelerisque
                      sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>

      <br />
      <br />
      <br />

      <section>
        <h2 className="text-center">Facility Features</h2>
        <br />
        <br />

        <Row className="text-center">
          <Organization image={Facility1} alt="Cafe">
            {" "}
            Modern Dining{" "}
          </Organization>
          <Organization image={Facility2} alt="bedroom">
            {" "}
            Spacious Quaters{" "}
          </Organization>
          <Organization image={Facility3} alt="couple playing putt putt">
            {" "}
            Endless activities{" "}
          </Organization>
          <Organization image={Facility4} alt="Living area">
            {" "}
            Comfortable living{" "}
          </Organization>
          <Organization image={Facility5} alt="Library">
            {" "}
            Exquisite Library{" "}
          </Organization>
          <Organization
            image={Facility6}
            alt="physical therapist working with patient"
          >
            {" "}
            Caring Therapy{" "}
          </Organization>
          <Organization image={Facility7} alt="pool">
            {" "}
            Serenity Pool{" "}
          </Organization>
          <Organization image={Facility8} alt="friends playing games">
            {" "}
            Perfect Gathering{" "}
          </Organization>
        </Row>
      </section>
    </Layout>
  )
}

export default IndexPage
