import React from 'react';
import {Button,ButtonGroup,Card,CardImg,CardBody,CardTitle,CardText} from "reactstrap";
import M from "../../../assets/ulalala.jpg";


export default function Agriculture() {
    return (
        <div>
             <Card style={{ width: "26rem" }}>
                <CardImg alt="..." src={M} top />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </CardText>
                    <Button color="primary" href="#pablo" onClick={e=> e.preventDefault()}
                        >
                        Go somewhere
                    </Button>
                </CardBody>
            </Card> 
        </div>
        )
        }