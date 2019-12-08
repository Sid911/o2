import React, { Component } from 'react'
import "./titlebar.css"
import '../assets/css/argon-dashboard-react.min.css';
import "../assets/vendor/nucleo/css/nucleo.css";

export class titlebar extends Component {
    render() {
        return (
            <div className="title drag">
            <button className="btn-outline-default btn-inner--icon border-0 shadow--hover nodrag" ><i className="ni ni-fat-delete"/></button>
            <button className="btn-outline-danger btn-inner--icon border-0 shadow--hover nodrag" ><i className="ni ni-fat-remove"/></button>
            </div>
        )
    }
}

export default titlebar
