import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { noteContext } from "@/providers/NoteProvider";

const NavBarHeader = () => {
  const [isShowSearchInput, setisShowSearchInput] =useState(false);
  const { setSearchTerm } = useContext(noteContext)
  return (
    <header>
      <Link to="/" >
      <img src={Logo} />
      </Link>
      <button className="search-button">
        <img src={SearchIcon}  onClick={() => setisShowSearchInput(!isShowSearchInput)}/>
      </button>
      {isShowSearchInput && 
      <input type="text" placeholder="جستجو" onChange={(e)=> setSearchTerm(e.target.value)}/>
      }
      <Link to="/note/0" className="new-note-button">
      
        <img src={PlusIcon} />
        یادداشت جدید
      
      </Link>



    </header>
  );
};

export default NavBarHeader;
