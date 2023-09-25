import "./Navbar.css";
import LastNote from "./lastNote/LastNote";
import Poshe from "./Poshe/Poshe";
import More from "./More/More";
import Logo from "@/assets/images/logo.svg";
import SearchIcon from "@/assets/images/icons/search.svg";

function NavBar() {
  return (
    <div id="nav-bar">
      <header>
        <img src={Logo} />
        <button className="search-btn">
          <img src={SearchIcon} />
        </button>
      </header>
      <LastNote />
      <Poshe />
      <More />
    </div>
  );
}

export default NavBar;
