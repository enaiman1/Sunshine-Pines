import React from "react"
import { Col, Image} from "react-bootstrap"

const Organization = props => (
    <Col md={3} sm={6}>
      <p>
        <Image src={props.image} alt={props.alt}  style={{ width: "400px", height: "250px"}} fluid />
      </p>
      <p>{props.children}</p>
    </Col>
)

export default Organization