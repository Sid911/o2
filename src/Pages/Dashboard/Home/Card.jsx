import React from "react";
import { Card,Button } from "reactstrap";

export default function NewsCard(props){
    console.log(props);
    
    return(
        <div>
            {props.show?<div className="text-center blockquote">Hello World</div>:<div></div> }
        </div>
    )
}