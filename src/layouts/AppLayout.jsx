import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Overlay from "@/components/ui/Overlay";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RequestHelpForm from "@/components/ui/RequestHelpForm";
import LoginForm from "@/components/ui/LoginForm";
import Auth from "@/components/ui/Auth";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isLoggedIn = false; // Replace with actual authentication logic

  useEffect(() => {
    //Close menu fnc
    function handleCloseMenu() {
      setIsOpen(false);
    }
    handleCloseMenu();
  }, [pathname]);

  return (
    <>
      {isOpen && (
        <div className="lg:hidden">
          <Overlay onClick={() => setIsOpen(false)} />
        </div>
      )}
      <div className="lg:grid grid-cols-10 h-screen relative">
        <aside
          style={{
            left: isOpen ? "0" : "-100%",
            transition: "left .3s ease-in-out",
            width: "100% !important",
          }}
          className="lg:col-span-2 h-full flex flex-col justify-between gap-4 p-2 absolute lg:static top-0 bottom-0 z-300 lg:z-1 bg-white right-0 sm:w-[60%] w-full lg:w-full md:max-w-75"
        >
          {/* Top half */}
          <div className="p-2 flex-1">
            <h2 className="font-bold text-xl md:text-2xl ps-4">SeatHelp</h2>
            <ul className="flex flex-col gap-2 h-fit min-h-80 p-2 mt-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `border border-gray-50 rounded-lg p-3 lg:p-2 transition-all duration-300 ease-in-out cursor-pointer flex gap-2 items-center ${
                    isActive
                      ? "bg-gray-400 text-white! translate-x-2"
                      : "hover:bg-gray-100 bg-white"
                  }`
                }
              >
                <Icon icon="hugeicons:home-09" width="25" height="25" />
                Home
              </NavLink>
              <NavLink
                to="/chatroom"
                className={({ isActive }) =>
                  `border border-gray-50 rounded-lg p-3 lg:p-2 cursor-pointer flex gap-2 items-center ${
                    isActive
                      ? "bg-gray-400 text-white!"
                      : "hover:bg-gray-100 bg-white"
                  }`
                }
              >
                <Icon icon="akar-icons:chat-bubble" width="25" height="25" />
                Chat Room
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `border border-gray-50 rounded-lg p-3 lg:p-2 transition-all duration-300 ease-in-out cursor-pointer flex gap-2 items-center ${
                    isActive
                      ? "bg-gray-400 text-white! translate-x-2"
                      : "hover:bg-gray-100 bg-white"
                  }`
                }
              >
                <Icon icon="streamline-plump:cog" width="25" height="25" />
                Profile
              </NavLink>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  `border border-gray-50 rounded-lg p-3 lg:p-2 transition-all duration-300 ease-in-out cursor-pointer flex gap-2 items-center ${
                    isActive
                      ? "bg-gray-400 text-white! translate-x-2"
                      : "hover:bg-gray-100 bg-white"
                  }`
                }
              >
                <Icon icon="iconoir:leaderboard-star" width="25" height="25" />
                Leaderboard
              </NavLink>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `border border-gray-50 rounded-lg p-3 lg:p-2 transition-all duration-300 ease-in-out cursor-pointer flex gap-2 items-center ${
                    isActive
                      ? "bg-gray-400 text-white! translate-x-2"
                      : "hover:bg-gray-100 bg-white"
                  }`
                }
              >
                <Icon icon="wpf:faq" width="25" height="25" />
                Resolved FAQs
              </NavLink>
            </ul>
          </div>
          {/* bottom half */}
          <div className="h-fit rounded mb-5 p-2 flex flex-col gap-4 justify-around">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 text-white rounded-lg p-2 lg:p-2 hover:bg-green-700 cursor-pointer flex gap-2 items-center">
                  <Icon
                    icon="streamline-plump:help-chat-1"
                    width="25"
                    height="25"
                  />
                  Request Help
                </Button>
              </DialogTrigger>
              <DialogOverlay className="backdrop-blur-sm bg-black/40" />
              <DialogContent
                showCloseButton={false}
                className="bg-white border-0 w-fit sm:max-w-none z-400"
                aria-describedby={undefined}
              >
                <DialogTitle className={"flex flex-col gap-1"}>
                  <span className="text-xl md:text-2xl font-light">
                    Request Form
                  </span>
                  <span className="text-sm text-gray-400 italic">
                    Join the waiting line and get help from the community
                  </span>
                </DialogTitle>

                <RequestHelpForm />
              </DialogContent>
            </Dialog>
            <>
              {isLoggedIn ? (
                <Button className="bg-red-700 hover:bg-red-800 text-white rounded-lg p-2 lg:p-2 cursor-pointer flex gap-2 items-center">
                  <Icon icon="solar:logout-2-outline" width="25" height="25" />
                  Logout
                </Button>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg p-2 lg:p-2 cursor-pointer flex gap-2 items-center">
                      <Icon
                        icon="solar:login-2-outline"
                        width="25"
                        height="25"
                      />
                      Log in / Register
                    </Button>
                  </DialogTrigger>
                  <DialogOverlay className="backdrop-blur-sm bg-black/40" />
                  <DialogContent
                    showCloseButton={false}
                    className="bg-white border-0 w-lg sm:max-w-none z-400 min-w-[40vw] min-h-50"
                    aria-describedby={undefined}
                  >
                    <Auth />
                  </DialogContent>
                </Dialog>
              )}
            </>
          </div>
        </aside>
        <main className="bg-gray-100 lg:col-span-8 p-1 relative h-full lg:h-[97%]">
          <Outlet />

          <Icon
            onClick={() => setIsOpen((prev) => !prev)}
            className={`absolute right-5 z-310 top-[2%] md:top-[3%] lg:hidden cursor-pointer ${isOpen ? "border-gray-100" : "border-gray-400"}`}
            icon={isOpen ? "uiw:close" : "solar:hamburger-menu-broken"}
            width="30"
            height="30"
          />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
