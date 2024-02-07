import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import s from "./lay.module.css";

export const LayOut = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};