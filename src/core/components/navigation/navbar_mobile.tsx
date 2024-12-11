import { Dialog } from "@headlessui/react";
import { HiCalculator, HiChartBar, HiClock, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { NavBarMobileProps } from "./types";
import DarkModeSwitch from "../util/dark_mode_switch";
import NavBarDisclosure from "./navbar_disclosure";

const NavBarMobile = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  logOut,
}: NavBarMobileProps) => {
  return (
    <Dialog
      as="div"
      className="xl:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <Dialog.Panel className="px-4 fixed bg-stone-50 dark:bg-slate-700 inset-y-0 right-0 z-50 w-full overflow-y-auto py-7 sm:max-w-md sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="rounded-md dark:text-stone-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <HiX className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1"></div>
          <div className="flex items-center justify-center">
            <DarkModeSwitch />
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">

              <NavLink
                to="/directory"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50"
              >
                DIRECTORIO
              </NavLink>

              {/* <NavBarDisclosure
                name={"GESTIÓN"}
                links={[
                  {
                    name: "LOGISTICA",
                    href: "/tracking",
                    icon: HiClock,
                    description: "",
                  },
                ]}
              /> */}

            </div>
            <div className="py-6">
              <div
                onClick={logOut}
                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 dark:bg-slate-700 hover:!bg-slate-400 dark:text-slate-50"
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavBarMobile;
