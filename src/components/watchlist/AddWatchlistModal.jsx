import React, { useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist } from "../../store/slices/watchlistSlice";

export const AddWatchlistModal = (props) => {
  const { open, setOpen } = props;
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const onAddWatchlist = () =>
    // add watchlist to the store, pass userId and the title for the watchlist.
    dispatch(
      addWatchlist({ title: value, userId: currentUser.id, description })
    );

  const handleOk = () => {
    onAddWatchlist();
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} icon={<PlusOutlined />} className="w-full flex items-center justify-start mt-5 py-5">
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
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Enter watchlist title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <Input
            placeholder="Enter watchlist description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};
