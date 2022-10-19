import React from "react"
import Navbar from "./NavBar"


export default function Header (){
    return(
        <div className="headerContainer">
        <Navbar />
            <h1 className="mainHeader">Clean Blog</h1>
            <h3 className="header">A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}
