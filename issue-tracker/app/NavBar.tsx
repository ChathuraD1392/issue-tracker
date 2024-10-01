import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 px-5 border-b mb-5 h-12 items-center">
      <Link href="/">{<FaBug />}</Link>
      <ul className="flex space-x-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.label}
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
