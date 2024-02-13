import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import s from "./burg.module.css";
import { Dialog } from "@headlessui/react";

export const Burger = ({ links }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation().pathname;
  return (
    <nav onClick={() => setOpen(!isOpen)} className={s.mobileNav}>
      {isOpen ? (
        <AiOutlineClose size={30} fill="white" />
      ) : (
        <AiOutlineMenu size={30} fill="white" />
      )}

      <Dialog open={isOpen} onClose={() => setOpen(false)} className={isOpen? s.mBgOpen: s.mBgClose}>
        <div className={s.bg}>
          <Dialog.Panel className={isOpen ? s.open : s.close}>
            <Dialog.Title>menu</Dialog.Title>
            {links.map((item) => (
              <li
                className={item.link === location ? s.activ : item}
                key={item.link}
              >
                <NavLink className={s.navLink} to={item.link}>
                  {item.icon}
                  <span> </span>
                  {item.title}
                </NavLink>
              </li>
            ))}
            <button onClick={() => setOpen(false)}>close</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  );
};
