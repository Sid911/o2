import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";
import M from "../../../assets/ulalala.jpg";
import Charts from "./Chart"

export default function Agriculture() {
const Googlemaps = require("@google/maps").createClient({key: 'AIzaSyBRbGfNhsLe8wgQD1Gnm5RHUZqk38J1au4'})
return (
<div>
  <Container>
    <Row>
      <Col className="col-sm">

          <Charts/>
 
      </Col>
      </Row>
      <Row>
      <Col className="col-sm">
      </Col>
    </Row>
  </Container>
</div>
)
}