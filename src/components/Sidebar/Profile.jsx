import { Avatar, Button, Popover } from "antd";
import React, { useEffect } from "react";
import { UserOutlined, MoreOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  // logout the user.
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signin");
  };

  return (
    <div className="flex gap-2 items-center justify-between border-2 rounded-md p-2">
      <div className="flex gap-2 items-center">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <h2>{currentUser?.name}</h2>
      </div>
      <Popover
        placement="top"
        content={<Button onClick={handleLogout}>Logout</Button>}>
        <MoreOutlined />
      </Popover>
    </div>
  );
};

export default Profile;
