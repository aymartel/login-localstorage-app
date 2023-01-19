import * as React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { ADMIN, HOME, LOGIN, PRIVATE } from "../routes/path";

function HeaderOne() {

  const {isAuthenticated} = useAuthContext();
  return (
    <nav>
      {"token:" + isAuthenticated}
      <ul>
        <li>
          <NavLink
            to={LOGIN}
          >
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink
            to={HOME}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PRIVATE}
          >
            PRIVATE
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ADMIN}
          >
            ADMIN
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}
export default HeaderOne;