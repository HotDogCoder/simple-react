import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "../util/dark_mode_switch";

interface Props {
  logOut: () => void;
}

export default function NoAuthNavBar(props: Props) {
  return (
    <header className="dark:bg-slate-700 bg-stone-50 fixed w-full z-40 text-slate-700 dark:text-stone-50 py-5">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <NavLink to="/" className="">
            <span className="sr-only">Gloria</span>
          </NavLink>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row">
          <NavLink
            to="/login"
            className="px-3 py-1 text-base font-medium text-slate-700 dark:text-stone-50 hover:text-slate-900 dark:hover:text-stone-50"
          >
            Login
          </NavLink>
          <NavLink
            to="/registration"
            className="px-3 py-1 text-base font-medium text-slate-700 dark:text-stone-50 hover:text-slate-900 dark:hover:text-stone-50"
          >
            Sing In
          </NavLink>
        </div>
        <div className="px-2 flex items-center">
          <DarkModeSwitch />
        </div>
      </nav>
    </header>
  );
}
