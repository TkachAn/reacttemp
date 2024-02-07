import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import s from "./s.module.css";

export const Header = () => {
	const [nav, setNav] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.box}>
          <div>Logo</div>
          <nav  className={nav ? [s.menu, s.active].join(" ") : [s.menu]}>
            <NavLink to='/'>
							Home
						</NavLink>
						<NavLink to='/about'>
							About Us
						</NavLink>
						<NavLink to='/contacts'>
							Contacts
						</NavLink>
          </nav>
					<div onClick={() => setNav(!nav)} className={s.mobile}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};