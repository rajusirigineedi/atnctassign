import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const MainLayout = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // If no user is logged in, redirect to the sign-in page
  useEffect(() => {
    if (!currentUser) return navigate("/signin");
  }, [currentUser]);

  // If no user is logged in, return null
  if (!currentUser) return null;

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <Sidebar />
      <div className="col-start-4 col-span-full pt-5 mb-[5%] pr-[5%]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
