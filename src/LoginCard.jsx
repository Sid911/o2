import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {login,logout} from "./Actions/AuthActions";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col
} from "reactstrap";

function Cards(params){

    const st = useSelector(state => state);
    const loggedin= st.islogged.logged_in
    const dispatch = useDispatch();
        return (
        <Row className="main-height mt-3">
            <Col className="align-content-end">
            </Col>
            <Col>
            <Card className="bg-secondary shadow-lg--hover shadow border-0">
                <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                <br/>
                    <small>Sign in with</small>
                    
                </div>
                <div className="row justify-content-center" >
                    <div style={{padding:5}}>
                    <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    onClick={e => e.preventDefault()}
                    >
                    <span className="btn-inner--icon">
                        <img
                        alt="..."
                        src={require("./assets/img/icons/common/github.svg")}
                        />
                    </span>
                    <span className="btn-inner--text">Github</span>
                    </Button>
                    </div>
                    <div style={{padding:5}}>
                    <Button
                    className="btn-neutral btn-icon" 
                    color="default"
                    href="#pablo">
                        <span className="btn-inner--icon">
                            <img
                            alt="..."
                            src={require("./assets/img/icons/common/google.svg")}
                            />
                        </span>
                        <span className="btn-inner--text">Google</span>
                    </Button>
                    </div>
                </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                    <small>Or sign in with anonymously</small>
                    <div className="text-center">
                    <Button className="my-4" color="primary" type="button" onClick={() => loggedin?dispatch(logout()):dispatch(login())}>
                        {loggedin?"You are logged in!":"You are not logged in"}
                    </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Row className="mt-3">
                <Col xs="6">
                <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                >
                    <small>Create new account</small>
                </a>
                </Col>
            </Row>
            </Col>
        </Row>
        );
}

export default Cards;