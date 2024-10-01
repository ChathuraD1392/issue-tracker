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
    <nav className="flex space-x-5 px-5 border-b mb-5 h-12 items-center bg-green-600 font-medium">
      <Link href="/">
        <FaBug color="white" />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={classnames({
                "text-white": currentPath === link.href,
                "text-green-200": currentPath != link.href,
                "hover:text-white transition-colors": true,
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
