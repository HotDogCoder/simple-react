import { useState } from "react";
import NavBarDesktop from "./navbar_desktop";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "../util/dark_mode_switch";
import NavBarMobile from "./navbar_mobile";
import { HiMenuAlt2 } from "react-icons/hi";

interface Props {
  logOut: () => void;
}

export default function NavBar(props: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 bg-stone-50 dark:bg-slate-700 text-slate-700 dark:text-stone-50 fixed w-full z-50">
      <nav
        className="mx-auto flex items-center justify-center py-6"
        aria-label="Global"
      >
        <div className="flex">
          <NavLink to="/" className="">
            <span className="sr-only">Legal Jelly</span>
          </NavLink>
        </div>
        <button
          type="button"
          className="xl:hidden inline-flex items-center justify-center rounded-md p-2.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <HiMenuAlt2
            className="h-6 w-6 dark:text-stone-50"
            aria-hidden="true"
          />
        </button>
        <div className="flex-1"></div>
        <NavBarMobile
          logOut={props.logOut}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <NavBarDesktop logOut={props.logOut} />
        <div className="flex-1"></div>
        <div className="flex">
          <div className=" flex items-center">
            <DarkModeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}
