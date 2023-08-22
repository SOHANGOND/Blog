import React from 'react'
import {Link} from "react-router-dom"
import "./post.css"
export default function Post({ post }) {
    const PF = "http://127.0.0.1:3000/images/";
  return (
      <div className='post'>
          {
              post.photo &&( <img src={PF+post.photo} alt="" className="postImg" />)
          }
     
          <div className="postInfo">
              <div className="postCats">
                  {
                      post.categories.map((c) => (
                          
                          <span className="postCat">{c.name}</span>
                      ))
                  }
             
              </div>
                  <Link className="link" to={`/post/${post._id}`}>
                 <span className="postTitle">{post.title}</span>
                  </Link>
              <hr />
              <span className="postData"> {new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="postDesc">
              {post.desc}
          </p>
      
      </div>
  )
}
 