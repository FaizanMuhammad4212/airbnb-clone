import React from "react";
import air from "../images/airbnb.png";
function Header(){
    return(
        <nav className="navbar">
          <img src={air} alt=""  height="70px"width="170px"></img>
      </nav>
        
    );
}

export default Header;