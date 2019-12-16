import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import "../../../assets/agriculture.css";
import {Card,CardBody,CardImg,CardTitle,CardText,Row,Col,Container} from "reactstrap";
import M from "../../../assets/ulalala.jpg";
import {fetchPostsIfNeeded} from "../../../Redux/Actions/news"
import NewsCards from "../Home/News";
import Excard from "../Home/Card";
import { useSelector,useDispatch } from "react-redux"

export default function Agriculture() {
    const dispatch = useDispatch()
    var x = 0;
    while (x<1) {
        dispatch(fetchPostsIfNeeded("agriculture","farming"))
        x+=1
    } 
    const item = useSelector(state=> state.agricultureNews.items)
    const newses= item.map((n)=> <Excard title={n.title} image={n.urlToImage} description={n.description}/>)
return (
    <div className="Y">
    <Row>
        <Col className="col-sm">
            <NewsCards newseElement={newses}/>
        </Col>
        <Col className="col-sm">
        <span>
                <Card style={{ width: "rem" }}>
                    <CardImg alt="..." src={M} top /><br />
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
            <br />
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
            </Card><br />
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
        </span>
        </Col>
        <Col className="col-sm">
        <span>
        </span>
        </Col>
    </Row>
    </div>
    )
    }