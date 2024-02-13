import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import s from "./page.module.css";
import { Dialog } from "@headlessui/react";

const links = [
  { link: "/", title: "home", icon: "" },
  { link: "/about", title: "about us", icon: "" },
  { link: "/contacts", title: "contacts", icon: "" },
  { link: "/download", title: "download", icon: "" },
];

export const AboutUsPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.content}>
          <h1>AboutUsPage</h1>
        </div>
      </div>
    </div>
  );
};
