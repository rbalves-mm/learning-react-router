import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const NavBar = () => {
   return (
     <>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
