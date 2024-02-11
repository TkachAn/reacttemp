import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useSound from "use-sound";
import tab from '../../../sound/tap-kick.mp3';
import swipe from '../../../sound/swipe_1.mp3'
import s from "./nav.module.css";

const audio = new Audio();
audio.src = '../../../sound/tap_1.mp3'

export const NavBar = ({ links }) => {
  console.log("useLocation: ", useLocation());
  const location = useLocation().pathname;
  const [playOn] = useSound(tab);
  const [onMouseOver] = useSound(swipe);
   // const [onMouseOver] = useSound(swipe);
   
  return (
    <>
      <ul className={s.ul}>
        {links.map((item) => (
          <li onClick={playOn} onMouseOver={onMouseOver}
            className={item.link === location ? s.active : ""}
            key={item.link}
          >
            <NavLink className={s.navLink} to={item.link}>
              {item.title}
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
