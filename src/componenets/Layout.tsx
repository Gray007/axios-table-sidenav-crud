import React, { type FC } from "react";
import SideNav from "./SideNav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <SideNav />
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default Layout;
