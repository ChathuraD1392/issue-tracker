"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 px-5 border-b mb-5 h-12 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-5 font-semibold">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={classnames({
                "text-zinc-900": currentPath === link.href,
                "text-zinc-500": currentPath != link.href,
                "hover:text-zinc-900 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
