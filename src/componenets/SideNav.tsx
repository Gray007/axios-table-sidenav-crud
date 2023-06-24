import Link from "next/link";
import React, { FC, useState } from "react";
import MenuLinkDropdown from "./ui/MenuLinkDropdown";
import MenuListDropdown from "./ui/MenuListDropdown";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const customLinks = [
    {
      title: "Custom Link No.1",
      url: "/customlink/1",
      svgPath:
        "M15 9h1v2h-1v-2zM8 9h1v2H8V9zM12 9h1v2h-1v-2zM21 13V6c0-1.1-.9-2-2-2H5C3.9 4 3 4.9 3 6v7H2v2h20v-2h-1zM5 6h14v7H5V6zm3 13h2v-1H8v1zm3 0h2v-1h-2v1zm3 0h2v-1h-2v1z",
    },
    {
      title: "Custom Link No.2",
      url: "/customlink/2",
      svgPath:
        "M16 5v2H8V5H5v16h14V5h-3zm-5 0v2H8V5h3zm4 0v2h-3V5h3zm-6 2v2H8V7h1zm4 0v2h-3V7h3zm-2 4v2H8v-2h6zm0 4v2H8v-2h6z",
    },
    {
      title: "Custom Link No.3",
      url: "/customlink/3",
      svgPath:
        "M12 21.35l-1.88-.97c-4.25-2.19-7.12-6.62-7.12-11.38 0-2.5 0-4.75 1.5-6.38l1.53 1.5C6.12 4.88 6 7.12 6 9.12c0 4.38 3.62 8 8 8 1.5 0 3-.38 4.25-1.12l1.5 1.5c-1.5.75-3.12 1.12-4.75 1.12-5.5 0-10-4.5-10-10 0-5.5 4.5-10 10-10s10 4.5 10 10c0 3.12-1.5 6-4 7.88l-1.53-1.5c1.75-1.25 2.88-3 2.88-5.38 0-3.88-3.12-7-7-7s-7 3.12-7 7c0 2.38 1.12 4.12 2.88 5.38l-1.88.97z",
    },
    {
      title: "Custom Link No.4",
      url: "/customlink/4",
      svgPath: "M4 6h16M4 10h16M4 14h16M4 18h16",
    },
    {
      title: "Custom Link No.5",
      url: "/customlink/5",
      svgPath: "M10 19l-7-7m0 0l7-7m-7 7h18",
    },
    {
      title: "Custom Link No.6",
      url: "/customlink/6",
      svgPath: "M14 5l7 7m0 0l-7 7m7-7H3",
    },
  ];

  const settingsLinks = [
    { title: "Account Settings", url: "/settings/account" },
    { title: "Field Service Settings", url: "/settings/field-service" },
    { title: "Help Desk Settings", url: "/settings/help-desk" },
    { title: "Sales Settings", url: "/settings/sales" },
    { title: "Custom Fields", url: "/settings/custom-fields" },
    { title: "Team Management", url: "/settings/team-management" },
  ];

  const sidebarLinks = [
    {
      title: "Users",
      svgPath:
        "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      links: [
        { title: "User Management", url: "/users/management" },
        { title: "User Roles", url: "/users/roles" },
      ],
    },
    {
      title: "Accounts",
      svgPath:
        "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      links: [
        { title: "Account Dashboard", url: "/accounts/dashboard" },
        { title: "Account Settings", url: "/accounts/settings" },
        { title: "Billing Information", url: "/accounts/billing" },
      ],
    },
    {
      title: "Field Services",
      svgPath: "M19 9h-6V3H5v18h8v-6h6v-6zm-4 4h-2v2h2v-2zm2-8H5V5h12V3z",
      links: [
        { title: "Tickets", url: "/field-services/tickets" },
        { title: "Products", url: "/products" },
        { title: "Project Planning", url: "/field-services/project-planning" },
        { title: "Reports", url: "/field-services/reports" },
      ],
    },
    {
      title: "Help Desk",
      svgPath:
        "M21 11.07V12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2v.93L15 5l-4 3v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8v-2l-4-3 4-3zm-10 .93c-3.86 0-7 3.14-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7c0-3.86-3.14-7-7-7z",
      links: [
        { title: "Help Tickets", url: "/help-desk/tickets" },
        { title: "Knowledge Base", url: "/help-desk/knowledge-base" },
        { title: "Support Chat", url: "/help-desk/chat" },
      ],
    },
    {
      title: "Sales",
      svgPath:
        "M12 2L2 7l10 5 10-5-10-5zM4.27 8.59L12 12.17l7.73-3.58M12 22L2 17l10-5 10 5-10 5zM4 16h16",
      links: [
        { title: "Sales Dashboard", url: "/sales/dashboard" },
        { title: "Leads Management", url: "/sales/leads" },
        { title: "Opportunities", url: "/sales/opportunities" },
        { title: "Sales Reports", url: "/sales/reports" },
      ],
    },
    {
      title: "Rewards",
      svgPath: "M12 7v14m0 0l-5-5m5 5l5-5M6 12h14",
      links: [
        { title: "Reward Programs", url: "/rewards/programs" },
        { title: "Points Redemption", url: "/rewards/redemption" },
        { title: "Reward History", url: "/rewards/history" },
      ],
    },
    {
      title: "Referrals",
      svgPath:
        "M15 10l-1 1m-1 3v.01M9 14l1-1m1-3V10m4 0h3M5 21h14V5H5v16zM7 7h6m-3 0V3m0 4v6",
      links: [
        { title: "Referral Dashboard", url: "/referrals/dashboard" },
        { title: "Referral Campaigns", url: "/referrals/campaigns" },
        { title: "Referral Analytics", url: "/referrals/analytics" },
      ],
    },
    {
      title: "Promo Banners",
      svgPath:
        "M12 20h7l-3.5-6H17l-7-12h-1L5 14H2.5L6 20h6zm2 0v-6h3V8h-3V2H6L2.5 8H6v6H2l3.5 6H12z",
      links: [
        { title: "Banner Management", url: "/promo-banners/management" },
        { title: "Banner Templates", url: "/promo-banners/templates" },
      ],
    },
  ];

  return (
    <>
      {isOpen ? (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
          <div className="px-4 py-6">
            <span className="grid h-10 w-full place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 70 70"
                fill="black"
              >
                <path d="M26 4.5c0 1-1 1.5-3 1.5s-3 .5-3 1.5S19 9 17 9s-3 .5-3 1.5c0 .8-.7 1.5-1.5 1.5s-1.5.7-1.5 1.5-.7 1.5-1.5 1.5c-1 0-1.5 1-1.5 3s-.5 3-1.5 3S5 22 5 24s-.5 3-1.5 3C2.3 27 2 28.5 2 34.5S2.3 42 3.5 42C4.6 42 5 43.2 5 46.5S5.4 51 6.5 51c1 0 1.5 1 1.5 3s.5 3 1.5 3c.8 0 1.5.7 1.5 1.5s.7 1.5 1.5 1.5 1.5.7 1.5 1.5c0 1 1 1.5 3 1.5s3 .5 3 1.5 1 1.5 3 1.5 3 .5 3 1.5c0 1.2 1.7 1.5 9 1.5s9-.3 9-1.5c0-1 1-1.5 3-1.5s3-.5 3-1.5 1-1.5 3-1.5 3-.5 3-1.5c0-.8.7-1.5 1.5-1.5s1.5-.7 1.5-1.5.7-1.5 1.5-1.5c1 0 1.5-1 1.5-3s.5-3 1.5-3 1.5-1 1.5-3 .5-3 1.5-3c1.2 0 1.5-1.5 1.5-7.4 0-5.3-.4-7.9-1.5-9-.8-.8-1.5-2.8-1.5-4.5 0-2.1-.5-3.1-1.5-3.1S62 20 62 18s-.5-3-1.5-3c-.8 0-1.5-.7-1.5-1.5s-.6-1.5-1.4-1.5-1.6-.7-2-1.5c-.3-.8-1.7-1.5-3.1-1.5-1.6 0-2.5-.6-2.5-1.5 0-1-1-1.5-3-1.5s-3-.5-3-1.5C44 3.3 42.3 3 35 3s-9 .3-9 1.5zm3 26.9c0 8.2.3 10.8 1.6 12 2 2.1 7.4 2.1 7.4.1 0-.8.7-1.5 1.5-1.5 1.2 0 1.5-1.8 1.5-10.5V21h9v12.5C50 41 49.6 46 49 46c-.5 0-1.2 1.1-1.6 2.4-.3 1.5-1.5 2.7-3 3-1.3.4-2.4 1.1-2.4 1.6 0 1.7-13.6 1.2-15.4-.5-.8-.8-1.9-1.5-2.5-1.5s-1.1-.5-1.1-1.1-.7-1.7-1.5-2.5c-1.2-1.2-1.5-4.3-1.5-14V21h9v10.4z" />
              </svg>
              Logo
            </span>

            <ul className="mt-6 space-y-1">
              {sidebarLinks.map((sidebarList) => (
                <MenuListDropdown
                  key={sidebarList.title}
                  title={sidebarList.title}
                  svgPath={sidebarList.svgPath}
                  links={sidebarList.links}
                />
              ))}

              {customLinks.map((customLink) => (
                <li key={customLink.url}>
                  <Link
                    href={customLink.url}
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={customLink.svgPath}
                      />
                    </svg>

                    <span className="text-sm font-medium">
                      {customLink.title}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href=""
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  account settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
          <div>
            <div className="inline-flex h-16 w-16 items-center justify-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 70 70"
                  fill="black"
                >
                  <path d="M26 4.5c0 1-1 1.5-3 1.5s-3 .5-3 1.5S19 9 17 9s-3 .5-3 1.5c0 .8-.7 1.5-1.5 1.5s-1.5.7-1.5 1.5-.7 1.5-1.5 1.5c-1 0-1.5 1-1.5 3s-.5 3-1.5 3S5 22 5 24s-.5 3-1.5 3C2.3 27 2 28.5 2 34.5S2.3 42 3.5 42C4.6 42 5 43.2 5 46.5S5.4 51 6.5 51c1 0 1.5 1 1.5 3s.5 3 1.5 3c.8 0 1.5.7 1.5 1.5s.7 1.5 1.5 1.5 1.5.7 1.5 1.5c0 1 1 1.5 3 1.5s3 .5 3 1.5 1 1.5 3 1.5 3 .5 3 1.5c0 1.2 1.7 1.5 9 1.5s9-.3 9-1.5c0-1 1-1.5 3-1.5s3-.5 3-1.5 1-1.5 3-1.5 3-.5 3-1.5c0-.8.7-1.5 1.5-1.5s1.5-.7 1.5-1.5.7-1.5 1.5-1.5c1 0 1.5-1 1.5-3s.5-3 1.5-3 1.5-1 1.5-3 .5-3 1.5-3c1.2 0 1.5-1.5 1.5-7.4 0-5.3-.4-7.9-1.5-9-.8-.8-1.5-2.8-1.5-4.5 0-2.1-.5-3.1-1.5-3.1S62 20 62 18s-.5-3-1.5-3c-.8 0-1.5-.7-1.5-1.5s-.6-1.5-1.4-1.5-1.6-.7-2-1.5c-.3-.8-1.7-1.5-3.1-1.5-1.6 0-2.5-.6-2.5-1.5 0-1-1-1.5-3-1.5s-3-.5-3-1.5C44 3.3 42.3 3 35 3s-9 .3-9 1.5zm3 26.9c0 8.2.3 10.8 1.6 12 2 2.1 7.4 2.1 7.4.1 0-.8.7-1.5 1.5-1.5 1.2 0 1.5-1.8 1.5-10.5V21h9v12.5C50 41 49.6 46 49 46c-.5 0-1.2 1.1-1.6 2.4-.3 1.5-1.5 2.7-3 3-1.3.4-2.4 1.1-2.4 1.6 0 1.7-13.6 1.2-15.4-.5-.8-.8-1.9-1.5-2.5-1.5s-1.1-.5-1.1-1.1-.7-1.7-1.5-2.5c-1.2-1.2-1.5-4.3-1.5-14V21h9v10.4z" />
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-100">
              <div className="px-2">
                <ul className="space-y-1 pt-4">
                  {sidebarLinks.map((sidebarLink) => (
                    <MenuLinkDropdown
                      key={sidebarLink.title}
                      title={sidebarLink.title}
                      svgPath={sidebarLink.svgPath}
                      links={sidebarLink.links}
                    />
                  ))}
                </ul>
                <ul className="space-y-1 border-t border-gray-100 pt-4">
                  {customLinks.map((customLink) => (
                    <li key={customLink.url}>
                      <Link
                        href={customLink.url}
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={customLink.svgPath}
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center border-t py-4">
                  <button
                    onClick={() => setOpenSettings(!openSettings)}
                    className="group relative flex rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    {openSettings && (
                      <div className="absolute start-full ms-6 rounded bg-white px-2 py-1.5 text-sm font-medium text-black">
                        <ul className="flex flex-col space-y-2">
                          <li>
                            <span className="block border-b pb-1 font-bold text-black">
                              Account Settings
                            </span>
                          </li>

                          {settingsLinks.map((settingsLink) => (
                            <li key={settingsLink.url}>
                              <Link
                                className="block px-4 py-2 font-medium text-gray-700 hover:text-gray-900"
                                href={settingsLink.url}
                              >
                                {settingsLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;
