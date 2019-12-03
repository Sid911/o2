import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class Cards extends React.Component {
    render() {
        return (
        <>
            <Card style={{ width: "18rem" }}>
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </CardText>
                <Button color="primary" onClick={e => e.preventDefault()}
                >
                Go somewhere
                </Button>
            </CardBody>
            </Card>
        </>
        );
    }
}

export default Cards;