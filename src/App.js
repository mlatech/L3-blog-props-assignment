import React from "react"
import Header from "./Header"
import BlogPost from "./BlogPost"
import data from "./data"
import  "./style.css"
import Footer from "./Footer"

export default function App(){
  const blogPostArr = data.map(post => {
    return( 
    < BlogPost 
    key= {post.id}
    title = {post.title}
    subTitle = {post.subTitle}
    author ={post.author}
    date ={post.date}
    />  
    )
 })
 return(
     <div >
        <Header  />
         <main> {blogPostArr} </main> 
         <Footer />
     </div>
 )
}