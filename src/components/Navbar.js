import React from "react";
import { Link } from "react-router-dom";


  const Navbar = ()=>{
    return(
        <div>
         <nav id="navbar">
 
    <div class="link-container">
      {/* <a>Lodging</a>
      <a>Day-Tours</a> */}
      <h1>Gig At </h1>
    </div>
    
    <div class="button-wrapper">
    <Link to="/search">
      <button>Search Zip</button>
      </Link>
    </div>
  </nav>
    
        </div>
    )
  }



  export default Navbar;