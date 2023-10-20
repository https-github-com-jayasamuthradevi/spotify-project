import React from "react";
import '../stylesheets/sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar-container-1">
        <h3>
          <i className="fa-brands fa-spotify"></i> Spotify
        </h3>
        <span>
          <i className="fa fa-home"></i>
          <a href="">Home</a>
        </span>
        <span>
          <i className="fa fa-search"></i>
          <a href="">Search</a>
        </span>
        <span>
          <i className="fa fa-book"></i>
          <a href="">Your Library</a>
        </span>
      </div>

      <div className="sidebar-container-2">
        <span>
          <i className="fa fa-plus"></i>
          <a href="">Create Playlist</a>
        </span>
        <span>
          <i className="fa fa-heart"></i>
          <a href="">Liked Songs</a>
        </span>
        <span>
          <i className="fa fa-podcast"></i>
          <a href="">Your Episodes</a>
        </span>
      </div>

      <div className="sidebar-container-2">
        <a href="">FAV</a>

        <a href="">Daily Mix 1</a>

        <a href="">Discover Weekly</a>

        <a href="">Tamil</a>

        <a href="">Dance/Electronix Mix</a>

        <a href="">EDM/Popular</a>
      </div>

      <div className="sidebar-install-app">
        <i className="fa fa-download"></i>
        <a href="">Install App</a>
      </div>
    </div>
  );
}

export default Sidebar;
