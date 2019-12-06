import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {login,logout} from "./Actions/index";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

function Cards(params){
    const logged = useSelector(state => state.islogged);
    const dispatch = useDispatch();
        return (
        <>
            <Card>
            <CardBody>
                <CardTitle>Enter The Place Name</CardTitle>
                <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </CardText>
                <Button color="primary" onClick={logged?()=>dispatch(logout()):() => dispatch(login())}
                >
                {logged?"You are logged in!":"You are not logged in"}
                </Button>
            </CardBody>
            </Card>
        </>
        );
}

export default Cards;