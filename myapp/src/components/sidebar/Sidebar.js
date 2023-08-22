import {useState,useEffect} from 'react';
import "./sidebar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () =>
    {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    
    getCats();
  })

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1537824598505-99ee03483384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" className="sidebarImg" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nihil magnam modi eius, iste totam. Nihil at accusamus, asperiores quasi magnam ipsam quidem eligendi voluptatibus consequatur et atque voluptas doloribus totam vel illo delectus dolorum sint, aperiam, nobis sit aut reiciendis repellat placeat perspiciatis! Nam sapiente rerum impedit beatae velit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c => (
                <Link className='link' key={c._id} to={`/?cat=${c.name}`}>
            
            <li  className="sidebarListItem">{c.name}</li>
                </Link>
          ))}
         
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-facebook"></i>
              <i className="sidebarIcon fa-brands fa-square-instagram"></i>
              <i className="sidebarIcon fa-brands fa-square-twitter"></i>
              <i className="sidebarIcon fa-brands fa-square-pinterest"></i>

        </div>
      </div>
    </div>
  )
}
