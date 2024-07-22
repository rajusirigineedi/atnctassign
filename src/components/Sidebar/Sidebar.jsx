import React, { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Divider, Menu } from "antd";
import ListGroup from "./ListGroup";
import Profile from "./Profile";
import { AddWatchlistModal } from "../watchlist/AddWatchlistModal";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menu_items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
    },
  ];
  return (
    <div className="flex flex-col border-r-2 gap-2">
      <h1>Watchlists</h1>
      <Menu defaultSelectedKeys={["home"]} items={menu_items} />
      <Divider />
      <h1>My Lists</h1>
      <ListGroup />
      <AddWatchlistModal open={open} setOpen={setOpen} />
      <Profile />
    </div>
  );
};

export default Sidebar;
