import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import s from "./pop.module.css";

export const Burger = ({ links }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Popover className={s.mobileNav}>
      <Popover.Button onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <AiOutlineClose size={30} fill="white" />
        ) : (
          <AiOutlineMenu size={30} fill="white" />
        )}
      </Popover.Button>

      <Popover.Panel className={s.panel}>
      {/* <div className={s.grid}>
          <NavLink to="/analytics">Analytics</NavLink>
          <NavLink to="/engagement">Engagement</NavLink>
          <NavLink to="/security">Security</NavLink>
          <NavLink to="/integrations">Integrations</NavLink>
        </div> */}
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

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};
