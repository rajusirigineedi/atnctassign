import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeWatchlist } from "../../store/slices/watchlistSlice";
import { useNavigate, useParams } from "react-router-dom";

const ListItem = (props) => {
  const { title, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  const openWatchlist = () => navigate(`/watchlist/${id}`);

  const onDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(removeWatchlist(id));
  };

  return (
    <div
      className={`flex gap-2 py-2 px-2 cursor-pointer border rounded-md ${
        slug === id ? "bg-red-200" : ""
      }`}
      onClick={openWatchlist}>
      <p className="h-4 w-4 bg-black text-white">{title.slice(0, 1)}</p>
      <p>{title}</p>
      <DeleteOutlined onClick={onDeleteClick} />
    </div>
  );
};

export default ListItem;
