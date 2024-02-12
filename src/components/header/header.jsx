import React from "react";
import s from "./header.module.css";
import {NavBar} from "../elements/navBar/navBar";
import {Burger} from "../elements/burger/burger";
import { Logo } from "../elements/logo/logo_v2";

const links = [
  {link: "/", title: "home", icon: ""},
  {link: "/about", title: "about us", icon: ""},
  {link: "/contacts", title: "contacts", icon: ""},
	{link: "/download", title: "download", icon: ""},
];

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.box}>
          <Logo className={s.logo_v2}/>
          <nav className={s.bar}>
            <NavBar links={links} />
          </nav>
          <nav className={s.burger}>
            <Burger links={links} />
          </nav>
        </div>
      </div>
    </div>
  );
};
