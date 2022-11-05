import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={css.nav}>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/">SKILLS</NavLink>
        </li>
        <li>
          <NavLink to="/">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/">RESUME</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
