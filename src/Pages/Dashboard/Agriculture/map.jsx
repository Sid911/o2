import React from 'react';
import {Card, CardImg,CardBody} from "reactstrap";
import M from "../../../assets/ulalala.jpg";
import {Row,Col,Container} from "reactstrap";
import {CardTitle,CardText,Button,ButtonGroup} from "reactstrap";

export default function Agriculture() {
    return (
        <div>
        <Container className="Z">
  <Row>
    <Col className="col-sm">
      <span>
      <div className="Z">
            <Card style={{ width: "43rem"  }}>
                <CardImg src={M} alt="...">
                </CardImg>
                <CardBody>
                    
                </CardBody>
            </Card>
            </div>
      </span>
    </Col>
    <Col className="col-sm">
      <span  style={{paddingLeft:"35px"}}>
      <Card style={{ width: "10rem"}}>
                <CardBody>
            <div>
             <ButtonGroup vertical>
             <Button color="primary" type="button">
          coordinate-1
        </Button>  <Button color="primary" type="button">
          coordinate-2
        </Button>  <Button color="primary" type="button">
          coordinate-3
        </Button>  <Button color="primary" type="button">
          coordinate-4
        </Button>
        </ButtonGroup>
            </div>
                </CardBody>
            </Card>
      </span>
    </Col>
  </Row>
</Container>
       </div>
    )
}