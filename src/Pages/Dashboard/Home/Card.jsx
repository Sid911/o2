import React from "react";

export default function NewsCard(props){
    const cardstyle= {
      textAlign: 'left',
      color: '#FFF',
      minWidth: "20rem",
      minHeight: "25rem",
      background : "rgba(0,0,0,1)",
    };
    return(
        <div style={cardstyle} className="shadowb-lg--hover">
          {props.showImage?
          <img
            alt="..."
            src={props.image}
            style={{maxWidth: "600px", background : "rgba(0,0,0,.9)"}}/>:<></>}
          <div className="card-img-overlay" style={{background : "rgba(0,0,0,.6)"}}>
          >
            <div className="display-4">{props.title}</div>

              {props.description}
          </div>
        </div>
    )
}