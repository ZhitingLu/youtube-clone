import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input onChange={ e => {setInputSearch(e.target.value)}} value={inputSearch} type="text" placeholder="Search" />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Zhiting Lu"
          src="https://avatars0.githubusercontent.com/u/62883171?s=460&u=0c71e5cb8f4d9837867d294a9560396c9bda35e0&v=4"
        />
      </div>

    </div>
  );
};

export default Header;
