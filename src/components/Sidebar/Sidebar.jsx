import React, { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Divider, Menu, Input } from "antd";
import ListGroup from "./ListGroup";
import Profile from "./Profile";
import { AddWatchlistModal } from "../watchlist/AddWatchlistModal";
import { useNavigate } from "react-router-dom";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

const { Search } = Input;
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const menu_items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
    },
  ];
  function onMenuClick({ key }) {
    // here key is anyway "HOME", since we dont have any other menu items.
    // we can navigate to home.
    navigate(`/`);
  }

  if (showMenu)
    return (
      <div
        className="h-12 w-12 bg-red-500 shadow-xl rounded-full text-white cursor-pointer grid place-content-center top-4 left-4 border absolute"
        onClick={() => setShowMenu(false)}>
        <RiMenuFold2Line />
      </div>
    );

  return (
    <div className="flex flex-col shadow-2xl gap-2 justify-between col-span-3 w-[90%] p-[5%] h-screen absolute bg-white z-50 md:relative">
      <div className="flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-primary text-4xl font-bold mb-5">Watchlists</h1>
          <h1
            className="text-3xl text-primary cursor-pointer md:hidden"
            onClick={() => setShowMenu(true)}>
            <IoMdCloseCircle />
          </h1>
        </div>
        <p className="py-2"></p>
        <Menu
          defaultSelectedKeys={["home"]}
          items={menu_items}
          onClick={onMenuClick}
        />
        <Divider />
        <h1 className="font-medium text-xl mb-4">My Lists</h1>
        <ListGroup />
        <AddWatchlistModal open={open} setOpen={setOpen} />
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
