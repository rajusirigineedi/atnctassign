import { MoreOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  // get the current logged in user
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  // logout the user.
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signin");
  };

  return (
    <Popover
      placement="top"
      style={{ alignSelf: "end" }}
      content={
        <Button type="primary" className="w-44" onClick={handleLogout}>
          Logout
        </Button>
      }>
      <div className="flex gap-2 items-center justify-between border-2 rounded-md p-2 cursor-pointer justify-self-end">
        <div className="flex gap-2 items-center">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />

          <h2>{currentUser?.name}</h2>
        </div>
        <MoreOutlined className="rotate-90" />
      </div>
    </Popover>
  );
};

export default Profile;
