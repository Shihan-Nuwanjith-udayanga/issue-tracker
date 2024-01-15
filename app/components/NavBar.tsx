'use client';

import Link from 'next/Link'
import React from 'react'
import {usePathname} from 'next/navigation';
import { FaBug } from "react-icons/fa";
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'},
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {/* <li>
          <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li> */}
        {/* {links.map(link => (
          <Link
            key={link.href}
            className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800  transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))} */}
        {links.map(link =>
        <Link
        key={link.href}
        className={classnames({
          'text-zinc-900' : link.href === currentPath,
          'text-zinc-500' : link.href !== currentPath,
          'hover:text-zinc-800 transition-colors' : true
        })}
        href={link.href}>{link.label}</Link>)}
      </ul>
    </nav>
  );
}

export default NavBar