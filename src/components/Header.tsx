import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    return setMounted(true);
  }, []);
  
  return (
    <header>
      <div className="bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-900 dark:text-white">LOGO</h1>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 ml-5 bg-gray-200 rounded dark:bg-gray-800"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
              >
                {theme === "light" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
        <nav>
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="inline-block p-3 dark:text-gray-100">{label}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
