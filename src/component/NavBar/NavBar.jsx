import "./Navbar.css";
import LastNote from "./lastNote/LastNote";
import Poshe from "./Poshe/Poshe";
import More from "./More/More";
import Logo from "@/assets/images/logo.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import { Plus } from "react-bootstrap-icons";
import { noteContext } from "../NoteProvider/NoteProvider";
import { useContext } from "react";


function NavBar() {
  
  const { toggleNewNoteMode } = useContext(noteContext);

  return (
  
    < div id="nav-bar">
      <header>
        <img src={Logo} />
        <button className="search-btn">
          <img src={SearchIcon} />
        </button>
      </header>
      <div className="button">
          <button className="button1" onClick={ ()=> toggleNewNoteMode() }>
            <Plus className="plus" />
            یادداشت جدید
          </button>
        </div>
      <LastNote />
      <Poshe />
      <More />
    </div>
    
  );
}

export default NavBar;
