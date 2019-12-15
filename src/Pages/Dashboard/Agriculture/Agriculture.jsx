import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";
import M from "../../../assets/ulalala.jpg";

export default function Agriculture() {
    return (
        <div>
            <div className="X" >
             <ButtonGroup vertical>
            <Button color="primary" type="button" className="fa fa-address-card" ></Button>
            <Button color="primary" type="button" className="fa fa-info-circle"></Button>
            <Button color="primary" type="button" className="fa fa-map" ></Button>
            <Button color="primary" type="button" className="fa fa-heartbeat" ></Button>
            </ButtonGroup>
            </div>
            <div classNmae="row">
            <Container className="Y">
  <Row>
    <Col className="col-sm">
      <span>
      <>
        <Card style={{ width: "38rem" }}>
          <CardBody>
           
          </CardBody>
        </Card>
      </>
      </span>
    </Col>
    <Col className="col-sm">
      <span> <>
        <Card style={{ width: "18rem" }}>
          <CardImg
            alt="..."
            src={M}
            top
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </>
      <Card style={{ width: "18rem" }}>
          <CardImg
            alt="..."
            src={M}
            top
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardImg
            alt="..."
            src={M}
            top
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
        </span>
    </Col>
    <Col className="col-sm">
      <span> 
 </span>
    </Col>
  </Row>
</Container>
            </div>
        </div>
    )
}
