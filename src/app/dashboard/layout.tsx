import { Metadata } from "next";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Blogs",
  },
};

const DashboardLayout = ({
  children,
  users,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogin = true;
  return isLogin ? (
    <>
      {children}
      <h4> Adding some detils about blog</h4>
      <div>{users}</div>
      <div>{notification}</div>
    </>
  ) : (
    <>
      {login}
      <button>Login</button>
    </>
  );
};

export default DashboardLayout;