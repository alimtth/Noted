 import { useState } from "react";

function NavBarItem({ text, icon, event, selectPoshe}) {
  const styl = {
    backgroundColor: selectPoshe ? "white" : "#fcf1e3",
  };
    return (
      <div
        className={"nav-bar-item"}
        style={styl}
        onClick={event}
      >
        <img src={icon} />
        {text}
      </div>
    );
  }
  
  export default NavBarItem;
  