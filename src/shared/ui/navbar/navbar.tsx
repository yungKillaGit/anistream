'use client';
import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import classes from './navbar.module.css';

interface NavbarItem {
  link: string;
  label: string;
  icon?: ReactNode;
}

interface Props {
  data: NavbarItem[];
}

export const Navbar = ({ data }: Props) => {
  const currentPathname = usePathname();
  const links = data.map((item) => (
    <Link key={item.label} href={item.link} passHref legacyBehavior>
      <NavLink
        label={
          <>
            {item.icon || null}
            <span>{item.label}</span>
          </>
        }
        className={classes.link}
        active={item.link === currentPathname}
      />
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
};

export const NavbarIcon = ({ children }: { children: ReactNode }) => {
  return React.cloneElement(children as any, {
    className: classes.linkIcon,
  });
};
