"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 border-b px-3 h-14 items-center mb-2 bg-orange-300">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li
            key={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

// classnames -- > {`${
//     link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
//   } hover:text-zinc-800 transition-colors`}
