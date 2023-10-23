import { NavLink } from "react-router-dom";
import "../../public/styles/navbar.css";
export default function Navbar() {
  return (
    <div className={"navbar"}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/models"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Modelos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
