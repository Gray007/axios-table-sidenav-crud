import Link from "next/link";
import React, { type FC, useState, useEffect } from "react";

export interface MenuLinkDropdownProps {
  title: string;
  svgPath: string;
  links: Links[];
}

export interface Links {
  title: string;
  url: string;
}

export const MenuLinkDropdown: FC<MenuLinkDropdownProps> = ({
  title,
  svgPath,
  links,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  let timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [timeout]);
  
  const handleMouseEnter = () => {
    timeout && clearTimeout(timeout);
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsHovered(false);
    }, 80)
  };

  return (
    <li onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
      <span className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
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

        {isHovered && (
          <div className="absolute start-full ms-6 sm:w-64 rounded bg-white px-2 py-1.5 text-sm font-medium text-black">
            <ul className="flex flex-col space-y-2">
              <li>
                <span className="block border-b pb-1 font-bold text-black">
                  {title}
                </span>
              </li>
              {links.map((menuLink) => (
                <li key={menuLink.url} className='hover:border-l-4 border-blue-600'>
                  <Link
                    className="block px-4 py-2 font-medium text-gray-700 hover:text-gray-900"
                    href={menuLink.url}
                  >
                    {menuLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </span>
    </li>
  );
};

export default MenuLinkDropdown;
