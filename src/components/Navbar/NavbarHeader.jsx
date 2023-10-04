import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/assets/images/icons/plus.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import { Link } from "react-router-dom";

const NavBarHeader = () => {

  return (
    <header>
      <Link to="/" >
      <img src={Logo} />
      </Link>
      <button className="search-button">
        <img src={SearchIcon} />
      </button>
      <Link to="/note/0" className="new-note-button">
      
        <img src={PlusIcon} />
        یادداشت جدید
      
      </Link>



    </header>
  );
};

export default NavBarHeader;
