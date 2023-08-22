import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
  
      </div>
      <img src="./scenery.jpg" alt="" className="headerImg" />
    </div>
  )
}
