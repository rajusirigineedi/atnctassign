import React, { useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist } from "../../store/slices/watchlistSlice";

export const AddWatchlistModal = (props) => {
  const { open, setOpen } = props;
  const [value, setValue] = useState("");
  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const onAddWatchlist = () =>
    // add watchlist to the store, pass userId and the title for the watchlist.
    dispatch(addWatchlist({ title: value, userId: currentUser.id }));

  const handleOk = () => {
    onAddWatchlist();
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} icon={<PlusOutlined />}>
        Add Watchlist
      </Button>
      <Modal
        open={open}
        title="Create a new watchlist"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}>
        <Input
          placeholder="Enter watchlist title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </Modal>
    </>
  );
};
