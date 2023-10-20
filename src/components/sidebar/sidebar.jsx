import React from "react";
import "./sidebar.scss";
import { Button } from "../button/button";
import { FavList } from "../../data/fav";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar-container">
        <div className="logo">
          <i className="fa-brands fa-spotify"></i>
          <h2>Spotify</h2>
        </div>
        <Button
          className=" btn"
          text="Home"
          icon={<i className="fa fa-home" />}
        />

        <Button
          className=" btn"
          text="Search"
          icon={<i className="fa fa-search" />}
        />
        <Button
          className=" btn"
          text="Your Library"
          icon={<i className="fa fa-book" />}
        />
      </div>

      <div className="sidebar-container">
        <Button
          className=" btn"
          text="Create Playlist"
          icon={<i className="fa fa-plus" />}
        />
        <Button
          className=" btn"
          text="Liked Songs"
          icon={<i className="fa fa-heart" />}
        />
        <Button
          className=" btn"
          text="Your Episodes"
          icon={<i className="fa fa-podcast" />}
        />
      </div>

      <div className="sidebar-container">
        <h3>FAV</h3>
        {FavList.map((item, id) => {
          return <Button className="btn" id={id} text={item} />;
        })}
      </div>

      {/* <div className="sidebar-install-app">
        <i className="fa fa-download"></i>
        <a href="#">Install App</a>
      </div> */}
    </div>
  );
}

export default Sidebar;
