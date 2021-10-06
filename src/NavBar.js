import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink exact to="/listings">
        Listings
      </NavLink>
      <NavLink exact to="/listings/new">
        Add Listing
      </NavLink>
    </nav>
  );
}

export default NavBar;
