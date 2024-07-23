import React, { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Divider, Menu,Input } from "antd";
import ListGroup from "./ListGroup";
import Profile from "./Profile";
import { AddWatchlistModal } from "../watchlist/AddWatchlistModal";
import { useNavigate } from "react-router-dom";
const {Search} = Input;
const Sidebar = () => {
  const [open, setOpen] = useState(false);
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
  return (
    <div className="flex flex-col shadow-2xl gap-2 justify-between col-span-3 w-[90%] p-[5%] h-screen">
      <div className="flex-col gap-2">
        <h1 className="text-primary text-4xl font-bold mb-5">Watchlists</h1>
        <Search
          placeholder="Search"
          allowClear
          // enterButton="Search"
          size="large"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          // onSearch={onSearch}
          // disabled={loading}
        />
        <p className="py-2"></p>
        <Menu
          defaultSelectedKeys={["home"]}
          items={menu_items}
          onClick={onMenuClick}
        />
        <Divider />
        <h1 className="font-medium text-xl">My Lists</h1>
        <ListGroup />
        <AddWatchlistModal open={open} setOpen={setOpen} />
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
