import "./Navbar.css";
import LastNote from "./lastNote/LastNote";
import Poshe from "./Poshe/Poshe";
import More from "./More/More";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

function NavBar() {
 

 
  return (
    <div className="nav">
      <div className="parent">
        <div className="search">
          <h3 className="icon-text-navbar">Noted</h3>
          <h4>
            <Search className="serc" />
          </h4>
        </div>
        
       
        <LastNote />

        <Poshe />

        <More />
      </div>
    </div>
  );
}

export default NavBar;
