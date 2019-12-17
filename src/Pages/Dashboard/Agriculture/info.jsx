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
          <div className="display-3 text-center">Nitrogen Data</div>
          <Charts/>
          <div className="text-default"> scale: per 1000 tons Of Nitrogen</div>
      </Col>
      <Col className="col-sm">
          <div className="display-3 text-center">P<sub>2</sub>O<sub>5</sub> Data</div>
          <Charts/>
          <div className="text-default"> scale: per 1000 tons Of Nitrogen</div>
      </Col>
      <Col className="col-sm">
          <div className="display-3 text-center">K<sub>2</sub>O Data</div>
          <Charts/>
          <div className="text-default"> scale: per 1000 tons Of Nitrogen</div>
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