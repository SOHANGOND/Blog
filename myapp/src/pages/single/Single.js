import React from 'react'
import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar.js"
import SinglePost from "../../components/singlePost/SinglePost"
export default function Single() {
  return (
      <div className='single'>
         <SinglePost/>
         <Sidebar/>
    </div>
  )
}
