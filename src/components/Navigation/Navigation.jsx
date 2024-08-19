import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLinkNavigation);
  };
  return (
    <section className={s.wrapper}>
      <ul className="list-none flex gap-2">
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </section>
  );
};
export default Navigation;
