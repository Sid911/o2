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
        <Card style={{ width: "50%" }}>
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
          </CardBody>
        </Card>
      </>
    )
}