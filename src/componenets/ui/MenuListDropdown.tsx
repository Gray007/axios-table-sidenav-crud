import React, { type FC } from "react";
import { type MenuLinkDropdownProps } from "./MenuLinkDropdown";
import Link from "next/link";

type MenuListDropdownProps = MenuLinkDropdownProps

const MenuListDropdown: FC<MenuListDropdownProps> = ({
  title,
  svgPath,
  links,
}) => {
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
            </svg>

            <span className="text-sm font-medium"> {title} </span>
          </div>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 rounded-lg bg-blue-50 space-y-1 px-4">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-gray-800"
              >
                {link.title}
              </Link>
            </li>
          ))}

          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-gray-800"
            >
              Calendar
            </a>
          </li>
        </ul>
      </details>
    </li>
  );
};

export default MenuListDropdown;
