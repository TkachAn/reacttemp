import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import s from "../burger/burg.module.css";

// const links = [
//   { href: '/account-settings', label: 'Account settings' },
//   { href: '/support', label: 'Support' },
//   { href: '/license', label: 'License' },
//   { href: '/sign-out', label: 'Sign out' },
// ]

export function Burger({ links }) {
    const [isOpen, setOpen] = useState(false);
  return (
    <Menu>
      <Menu.Button  onClick={() => setOpen(!isOpen)}>{isOpen ? (
        <AiOutlineClose size={30} fill="white" />
      ) : (
        <AiOutlineMenu size={30} fill="white" />
      )}</Menu.Button>
      <Menu.Items className={s.mItem}>
        {links.map((item) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={item.link} as={Fragment}>
          
            <NavLink className={s.navLink} to={item.link}>
            {item.icon}
            <span> </span>
            {item.title}
          </NavLink>
          
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}