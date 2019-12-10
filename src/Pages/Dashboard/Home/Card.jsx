import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
  } from "reactstrap";

export default function NewsCard(props){
    
    return(
<>
        <Card style={{ width: "18rem" }}>
          <CardImg
            alt="..."
            src={props.image}
            top
          />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>
              {props.description}
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
    )
}