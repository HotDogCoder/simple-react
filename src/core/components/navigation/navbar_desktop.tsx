import React from "react";
import { Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { NavBarDesktopProps } from "./types";
import NavBarPopOver from "./navbar_popover";
import {
  HiArchive,
  HiCalculator,
  HiCalendar,
  HiChartBar,
  HiChartPie,
  HiClock,
  HiCreditCard,
} from "react-icons/hi";
import DarkModeSwitch from "../util/dark_mode_switch";

type Props = {
  logOut: () => void;
};

const NavBarDesktop: React.FC<Props> = (props: Props) => {
  return (
    <Popover.Group className="hidden xl:flex lg:gap-x-12">

      <NavLink
        to="/directory"
        className="px-2 text-sm font-semibold leading-6 text-gray-900 dark:bg-slate-700 dark:text-slate-50"
      >
        DIRECTORIO
      </NavLink>


      <NavBarPopOver
        name={"INFORMES"}
        links={[
          {
            name: "REPORTES DE TESORERIA",
            href: "/tresury",
            icon: HiChartBar,
            description: "",
          },
        ]}
      />

      <div
        onClick={() => props.logOut()}
        className="hidden lg:block px-2 text-sm font-semibold leading-6 text-gray-900 dark:bg-slate-700 dark:text-slate-50"
      >
        Log out <span aria-hidden="true">&rarr;</span>
      </div>
    </Popover.Group>
  );
};

export default NavBarDesktop;
