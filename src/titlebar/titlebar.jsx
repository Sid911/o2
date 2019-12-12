import React from 'react'
import "./titlebar.css"
import '../assets/css/argon-dashboard-react.min.css';
import "../assets/vendor/nucleo/css/nucleo.css";
import logo from "../assets/img/brand/logog.png"

import { Button,ButtonGroup, Row, div } from "reactstrap";


export function titlebar (props){
return (
<div className="title drag justify-content-between">
    <div className="flex-column" style={{marginTop:0}} unselectable={true}>
        <img src={logo} className="nodrag "/>
    </div>
    <div className="flex-column justify-content-between" style={{paddingTop:"2%",paddingLeft:"20%"}}>
        <ButtonGroup className="nodrag">
            <Button color="white" className="shadow-none shadow-lg--hover">Home</Button>
            <Button color="white" className="shadow-none shadow-lg--hover">Agriculture</Button>
            <Button color="white" className="shadow-none shadow-lg--hover">Roads</Button>
            <Button color="white" className="shadow-none shadow-lg--hover">Settings</Button>
        </ButtonGroup>
    </div>
    <div className="flex-column" style={{paddingTop:"2%",paddingRight:"1%"}}>
        <ButtonGroup className="nodrag">
            <Button outline color="dark" type="button" className="border-0 shadow shadow-lg--hover"><i
                    className="ni ni-fat-delete" /></Button>
            <Button outline color="dark" type="button" className="border-0 shadow shadow-lg--hover"><i
                    className="ni ni-air-baloon" /></Button>
            <Button outline color="danger" type="button" className="border-0 shadow shadow-lg--hover" onClick={()=> window.close()}><i
                    className="ni ni-fat-remove" /></Button>
        </ButtonGroup>
    </div>
</div>
)
}

export default titlebar