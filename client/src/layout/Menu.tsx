import type { Path } from '@/router';

import { NavLink, useLocation } from 'react-router-dom';
import { HomeOutlined, HomeFilled, ExploreOutlined, ExploreFilled, NotificationOutlined, NotificationFilled, ProfileOutlined, ProfileFilled } from '@/icons';
import clsx from 'clsx';

type MenuItem = {
  title: string;
  path: Path;
  icon: Record<'default' | 'active', React.ReactNode>;
};

const menuItems: MenuItem[] = [
  { title: '홈', path: '/', icon: { default: <HomeOutlined />, active: <HomeFilled /> } },
  { title: '탐색하기', path: '/explore', icon: { default: <ExploreOutlined />, active: <ExploreFilled /> } },
  { title: '알림', path: '/notifications', icon: { default: <NotificationOutlined />, active: <NotificationFilled /> } },
  { title: '프로필', path: '/profile', icon: { default: <ProfileOutlined />, active: <ProfileFilled /> } },
];

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <ul>
      {menuItems.map(({ title, path, icon }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) => clsx('flex items-center gap-4 p-3 rounded-full transition-all hover:bg-white-light/10', { active: isActive })}
          >
            {path === pathname ? icon.active : icon.default}
            <span className="text-xl">{title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
