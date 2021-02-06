import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export const Header = () => {
  const activeButtonNav = {
    backgroundColor: "#fff",
    color: "blueviolet",
  };

  return (
    <header className={style.header}>
      <NavLink
        activeStyle={activeButtonNav}
        className={style.navButton}
        to="/"
        end
      >
        Produtos
      </NavLink>
      <NavLink
        activeStyle={activeButtonNav}
        className={style.navButton}
        to="/contato"
      >
        Contato
      </NavLink>
    </header>
  );
};
