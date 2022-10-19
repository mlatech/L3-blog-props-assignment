import React from "react"

export default function BlogPost(props){
    return(
        <div className="post">
            <div className="titles">
            <h2 className="title">{props.title}</h2>
            <p className="subTitle">{props.subTitle}</p>
            <p className="author">Posted by {props.author} on {props.date}</p>
            </div>
        </div>
    )
}
