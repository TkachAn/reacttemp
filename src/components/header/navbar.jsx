import React, {useState} from "react";
import s from "./s.module.css";
import Logo from "../../ased/logo.png";
import LogoText from "../../ased/logo_text.png";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={s.wrapper}>
      <div className="container">
        <div className={s.box}>
          <div className={s.logo}>
            <img src={Logo} alt="/" />
            <img src={LogoText} alt="/" />
          </div>
          <ul className={nav ? [s.menu, s.active].join(" ") : [s.menu]}>
            <li>
              <a href="##">Product</a>
            </li>
            <li>
              <a href="##">About Us</a>
            </li>
            <li>
              <a href="##">Customers</a>
            </li>
            <li>
              <a href="##">Price</a>
            </li>
            <li>
              <a href="##">Contacts</a>
            </li>
          </ul>
					<div onClick={() => setNav(!nav)} className={s.mobile}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
