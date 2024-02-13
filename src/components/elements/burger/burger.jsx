import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import s from "./burg.module.css";

export const Burger = ({ links }) => {
  const [isOpen, setOpen] = useState(false);
  // const location = useLocation().pathname;
  return (
    <nav onClick={() => setOpen(!isOpen)} className={s.mobileNav}>
      {isOpen ? (
        <AiOutlineClose size={30} fill="white" />
      ) : (
        <AiOutlineMenu size={30} fill="white" />
      )}

      <ul className={isOpen ? s.open : s.close}>
        {links.map((item) => (
          <li className={s.item} key={item.link}>
            <NavLink className={s.navLink} to={item.link}>
              {item.icon}
              <span> </span>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
