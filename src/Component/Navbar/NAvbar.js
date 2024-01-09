import React, { useState, useRef, useEffect } from "react";
import logo from "./My_Store.png";
import logo1 from "./Hint-Given.png"

import {social, links} from './data'
import {FaBars} from "react-icons/fa";

const Navbar = () => {
const [showLinks, setShowLinks]=useState(false);
const linksContainerRef =useRef(null);
const linksRef=useRef(null)


useEffect(()=>{
  const linksHeight=linksRef.current.getBoundingClientRect().height;
 
  if(showLinks){
    linksContainerRef.current.style.height=`${linksHeight}px`
  }
  else{
    linksContainerRef.current.style.height='0px'
  }

}, [showLinks])

  return (
    <nav >
      <div style={{backgroundColor:'black', textAlign:"center", color:'white', fontWeight:'bolder', padding:'8px', fontSize:'20px'}}>Welcome to MyStore</div>
      
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "50px" }}
          />
          <img
            src={logo1}
            alt="logo"
            style={{ height: "50px", width: "150px" }}
          />
          <button 
          className="nav-toggle" 
          onClick={()=>setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>  
        </div>
       
       <div className='links-container' ref={linksContainerRef} >
          <ul className="links" ref={linksRef} >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}> {text} </a>
                </li>
              );
            })}
          </ul>
        </div>
        

        <ul  className='social-icons' >
            {social.map((so)=>{
              const {id, icon, text}=so;
                return(
                  <li key={id} style={{margin:'10px'}}>
                   <a href="#"> {icon}</a>
                    <a href='#'>
                    {text}
                    </a>  
                  </li>
                )
              })
            }
          </ul>
        
      </div>

      <div style={{ fontSize:'20px',backgroundColor:'black', textAlign:"center", color:'white', fontWeight:'bolder', padding:'8px',display:'flex', justifyContent:'space-around', position:'static'}}>
        <div> 50% dicount</div>
        <div>Free Shipping</div>
        <div>Different payment Method</div>
      </div>
    </nav>
  );
};

export default Navbar;
