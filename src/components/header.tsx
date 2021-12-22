import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header: VFC = () => {
  return (
    <header>
      <div className="bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-900">LOGO</h1>
        </div>
        <nav>
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="inline-block p-3">{label}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
