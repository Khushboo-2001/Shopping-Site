import React, { useState, useRef, useEffect } from "react";
import logo from "./My_Store.png";

import {social, links} from './data'
import {FaBars} from "react-icons/fa";

const Navbar = () => {

const[showlinks, setShowlinks]=useState(false)
const linksContainerRef = useRef(null);
const linksRef = useRef(null);

useEffect(()=>{
  const linksHeight=linksRef.current.getBoundingClientRect().height;
  
  if(showlinks){
    linksContainerRef.current.style.height=`${linksHeight}px`
  }
  else{
    linksContainerRef.current.style.height='0px'
  }

},[showlinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "100px" }}
          />
          <button 
          className="nav-toggle" 
          onClick={()=>setShowlinks(!showlinks)}
          >
            <FaBars />
          </button>
        </div>
       


          <div className='links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef} >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        

        <ul className="social-icons">
          {social.map((socialIcon)=>{
            const {id, url, icon}=socialIcon;
            return(
              <li key={id}>
                <a href={url}>
                {icon}
                </a>

              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
