import { IconHome, IconPlaylistAdd } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { AppPath } from '@/shared/config/routes';
import { Navbar, NavbarIcon, NavbarItem } from '@/shared/ui/navbar';
import classes from './layout.module.css';

export const COMMON_NAVBAR_ITEMS: NavbarItem[] = [
  {
    link: AppPath.HOME,
    label: 'Home',
    icon: (
      <NavbarIcon>
        <IconHome />
      </NavbarIcon>
    ),
  },
  {
    link: AppPath.ADMIN,
    label: 'Admin',
    icon: (
      <NavbarIcon>
        <IconPlaylistAdd />
      </NavbarIcon>
    ),
  },
];

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={classes.container}>
      <Navbar data={COMMON_NAVBAR_ITEMS} />
      <div className={classes.pageContainer}>{children}</div>
    </main>
  );
};

export default CommonLayout;
