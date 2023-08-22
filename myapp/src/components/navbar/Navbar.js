import React, { useContext } from 'react'
import "./navbar.css"
// import Home from '../pages/home/Home'
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
export default function Navbar() {
    const { user, dispatch } = useContext(Context);
    const PF="http://localhost:3000/images/"
    
    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }

    return (
      
      <div className="top">
          <div className="topLeft">
              <i className="topIcon fa-brands fa-square-facebook"></i>
              <i className="topIcon fa-brands fa-square-instagram"></i>
              <i className="topIcon fa-brands fa-square-twitter"></i>
              <i className="topIcon fa-brands fa-square-pinterest"></i>
          </div>    
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">
                      <Link to="/" className='link'>HOME</Link>
                  </li>
                  <li className="topListItem">
                      <Link className="link">ABOUT</Link>
                  </li>
                  <li className="topListItem"><Link className="link">CONTACT</Link></li>
                  <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}</li>
              </ul>



          </div>
            <div className="topRight">
                
                
                {
                    user ? (
                        < Link to="/setting">                        
                        <img src={PF+user.profilePic} alt="" className="topImage" />
                        </Link>
                        ): (<ul className='topList'>
                        <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                        </li>
                        
                        </ul>
                    )
                }
              
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
         </div>
  )
}
