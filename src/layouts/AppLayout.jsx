import { Outlet, Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Overlay from "@/components/ui/Overlay";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

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
          <Overlay />
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
            <h2 className="font-bold text-2xl ps-4">SeatHelp</h2>
            <ul className="flex flex-col gap-2 h-fit min-h-80 p-2 mt-3">
              <Link
                to="/"
                className="border border-gray-50 bg-white rounded-lg p-3 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center "
              >
                <Icon icon="hugeicons:home-09" width="25" height="25" />
                Home
              </Link>
              <Link
                to="/chatroom"
                className="border border-gray-50 bg-white rounded-lg p-3 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
              >
                <Icon icon="akar-icons:chat-bubble" width="25" height="25" />
                Chat Room
              </Link>
              <Link
                to="/profile"
                className="border border-gray-50 bg-white rounded-lg p-3 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
              >
                <Icon icon="streamline-plump:cog" width="25" height="25" />
                Profile
              </Link>
              <Link
                to="/leaderboard"
                className="border border-gray-50 bg-white rounded-lg p-3 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
              >
                <Icon icon="iconoir:leaderboard-star" width="25" height="25" />
                Leaderboard
              </Link>
              <Link
                to="/faqs"
                className="border border-gray-50 bg-white rounded-lg p-3 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
              >
                <Icon icon="wpf:faq" width="25" height="25" />
                FAQs
              </Link>
            </ul>
          </div>
          {/* bottom half */}
          <div className="h-fit rounded mb-5 p-2 flex flex-col gap-4 justify-around">
            <li className="bg-green-600 text-white rounded-lg p-2 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
              <Icon
                icon="streamline-plump:help-chat-1"
                width="25"
                height="25"
              />
              Request Help
            </li>
            <li className=" bg-red-700 text-white rounded-lg p-2 lg:p-2 hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
              <Icon icon="solar:logout-2-outline" width="25" height="25" />
              Logout
            </li>
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
