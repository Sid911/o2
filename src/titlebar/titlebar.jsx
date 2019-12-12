import React from 'react'
import "./titlebar.css"
import '../assets/css/argon-dashboard-react.min.css';
import "../assets/vendor/nucleo/css/nucleo.css";

import { Button,ButtonGroup } from "reactstrap";


export function titlebar (props){
    return (
        <div className="title drag">
            <ButtonGroup>
            <Button outline color="dark" type="button" size="sm" className="nodrag border-0 rounded-0" ><i className="ni ni-fat-delete"/></Button>
            <Button outline color="dark" type="button" size="sm" className="nodrag border-0 rounded-0"><i className="ni ni-air-baloon"/></Button>
            <Button outline color="danger" type="button" size="sm" className="nodrag border-0 rounded-0" onClick={()=> window.close()}><i className="ni ni-fat-remove"/></Button>
            </ButtonGroup>
        </div>
    )
}

export default titlebar
