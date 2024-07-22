import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  removeWatchlist,
  setActiveWatchlist,
} from "../../store/slices/watchlistSlice";

const ListItem = (props) => {
  const { title, id } = props;
  const dispatch = useDispatch();

  const openWatchlist = () => {
    dispatch(setActiveWatchlist(id));
    console.log("Opening watchlist with id: ", id);
  };

  const onDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(removeWatchlist(id));
    console.log("Deleting watchlist with id: ", id);
  };

  return (
    <div
      className="flex gap-2 py-2 px-2 cursor-pointer border rounded-md"
      onClick={openWatchlist}>
      <p className="h-4 w-4 bg-black text-white">{title.slice(0, 1)}</p>
      <p>{title}</p>
      <DeleteOutlined onClick={onDeleteClick} />
    </div>
  );
};

export default ListItem;
