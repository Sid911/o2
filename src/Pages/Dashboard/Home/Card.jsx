import React from "react";

export default function NewsCard(props){
    const cardstyle= {
      textAlign: 'left',
      minWidth: "20rem",
      maxWidth: "21rem",
      maxHeight: "25rem",
      background : "rgba(255,255,255,1)",
    };
    return(
        <div style={cardstyle} className="shadow shadowb-lg--hover">
          {props.showImage?
          <img
            alt="..."
            src={props.image}
            style={{maxWidth: "600px", background : "rgba(0,0,0,.9)"}}/>:<></>}
          <div className={props.showImage?"card-img-overlay" :"container card"} style={{background : "rgba(255,255,255,.6)"}}>
          >
            <div className="display-4">{props.title}</div>

              {props.description}
          </div>
        </div>
    )
}