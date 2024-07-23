import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeWatchlist } from "../../store/slices/watchlistSlice";

const ListItem = (props) => {
  const { title, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get the slug from the URL
  const { slug } = useParams();

  // function to open the watchlist
  const openWatchlist = () => navigate(`/watchlist/${id}`);
  // add ellipsis to the title if it is longer than 20 characters
  const titleWithEllipsis =
    title.length > 20 ? title.slice(0, 20) + "..." : title;

  // function to delete the watchlist
  const onDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(removeWatchlist(id));
  };

  return (
    <div
      className={`flex gap-2 py-2 px-2 cursor-pointer border items-center justify-between rounded-md ${
        slug === id ? "bg-red-100 border-red-400" : ""
      }`}
      onClick={openWatchlist}>
      <div className="flex gap-2 items-center">
        <p className="h-6 w-6 bg-black rounded-md text-white grid place-items-center">
          {title.slice(0, 1)}
        </p>
        <span>{titleWithEllipsis}</span>
      </div>
      <DeleteOutlined onClick={onDeleteClick} />
    </div>
  );
};

export default ListItem;
