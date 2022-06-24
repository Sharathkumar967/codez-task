// import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NAV__LINKS = [
  {
    display: "HOME",
    url: "/",
  },

  {
    display: "FORM",
    url: "/form",
  },

  {
    display: "ABOUT",
    url: "/about",
  },
  {
    display: "CONTACT",
    url: "/contact",
  },
  {
    display: "COURSE",
    url: "/course",
  },
  {
    display: "SERVICE",
    url: "/service",
  },
];

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav_list">
        {NAV__LINKS.map((item, index) => (
          <li className="nav_item" key={index}>
            <NavLink to={item.url} exact="true">
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
