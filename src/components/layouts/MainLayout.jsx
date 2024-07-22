import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import Sidebar from "../Sidebar/Sidebar";

const MainLayout = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // If no user is logged in, redirect to the sign-in page
  useEffect(() => {
    if (!currentUser) return navigate("/signin");
  }, [currentUser]);

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
