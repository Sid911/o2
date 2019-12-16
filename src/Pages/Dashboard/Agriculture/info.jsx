import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";
import M from "../../../assets/ulalala.jpg";

export default function Agriculture() {
    return (
        <div>
          <Container>
  <Row>
    <Col className="col-sm">
      <span>
      <Card style={{ width: "63rem" }}>
                <CardImg alt="..." src={M} top />
                <CardBody>
                   
                </CardBody>
            </Card>
      </span>
    </Col>
    <Col className="col-sm">
      <span>
      <Card style={{ width: "26rem" }}>
                <CardImg alt="..." src={M} top />
                <CardBody>
                   
                </CardBody>
            </Card>
      </span>
    </Col>
    <Col className="col-sm">
      <span>
      <Card style={{ width: "26rem" }}>
                <CardImg alt="..." src={M} top />
                <CardBody>
                  
                </CardBody>
            </Card>
      </span>
    </Col>
  </Row>
</Container>
        </div>
    )
}
