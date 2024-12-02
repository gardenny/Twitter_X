import type { Path } from "@/router";

import { createElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Explore, Notification, Profile } from "@/icons";
import { cn } from "@/utils";

type MenuItem = {
  title: string;
  path: Path;
  icon: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
};

const menuItems: MenuItem[] = [
  { title: "홈", path: "/", icon: Home },
  { title: "탐색하기", path: "/explore", icon: Explore },
  { title: "알림", path: "/notifications", icon: Notification },
  { title: "프로필", path: "/profile", icon: Profile },
];

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <ul className="my-6 w-full">
      {menuItems.map(({ title, path, icon }) => {
        const isMatch = path === pathname;
        return (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                cn(
                  "flex-center mb-2 rounded-full p-3 text-gray-800 hover:bg-white-light/10 xl:justify-start dark:hover:text-blue-400",
                  { "bg-white-light/10 font-bold text-primary": isActive },
                )
              }
            >
              {createElement(icon, {
                className: cn(
                  "h-6 w-6",
                  isMatch ? "fill-primary" : "fill-white-light",
                ),
              })}
              <span
                className={cn(
                  "hidden text-xl xl:ml-4 xl:block",
                  isMatch ? "text-primary" : "text-white-light",
                )}
              >
                {title}
              </span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
