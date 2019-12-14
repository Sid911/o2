import React from 'react'
import "./titlebar.css"
import '../assets/css/argon-dashboard-react.min.css';
import "../assets/vendor/nucleo/css/nucleo.css";
import logo from "../assets/img/brand/logog.png"

import { Button,ButtonGroup} from "reactstrap";
import { useSelector} from "react-redux";

export function titlebar (props){
return (
<div className="title drag justify-content-between flex-row">
    <div className="flex-column nodrag " style={{paddingLeft:"2%",paddingTop:10}} unselectable="on">
        <img src={logo} height="80px" width="80px" unselectable="on" alt="O2"/>
    </div>
    {props.show?
    <div className="flex-column justify-content-between" style={{paddingTop:"2%",paddingLeft:"20%"}}>
        <ButtonGroup className="nodrag">
            <Button outline color="primary" className="border-secondary border-right-0 shadow-none shadow-lg--hover">Home</Button>
    <Button outline color="primary" className="border-secondary border-left-0 border-right-0 shadow-none shadow-lg--hover" onClick={()=>function(){window.location.href="/agriculture"}}>Agriculture</Button>
            <Button outline color="primary" className="border-secondary border-left-0 border-right-0 shadow-none shadow-lg--hover">Roads</Button>
            <Button outline color="primary" className="border-secondary border-left-0 shadow-none shadow-lg--hover">Settings</Button>
        </ButtonGroup>
    </div>
    :<div></div>}
    <div className="flex-column" style={{paddingTop:"2%",paddingRight:"1%"}}>
        <ButtonGroup className="nodrag">
            <Button outline color="dark" type="button" className="border-0 shadow shadow-lg--hover" id="#mini"><i
                    className="ni ni-fat-delete" /></Button>
            <Button outline color="dark" type="button" className="border-0 shadow shadow-lg--hover" id="#max"><i
                    className="ni ni-air-baloon" /></Button>
            <Button outline color="danger" type="button" className="border-0 shadow shadow-lg--hover" id="#close" onClick={()=> window.close()}><i
                    className="ni ni-fat-remove" /></Button>
        </ButtonGroup>
    </div>
</div>
)
}

export default titlebar