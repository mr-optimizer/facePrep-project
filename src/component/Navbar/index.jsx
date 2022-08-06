import * as React from "react";
import classes from "./style.module.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useAuth } from "../../context/AuthProvider";
const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.flexGrow}>
            <div className={classes.dropDown}>
              <div>All</div>
              <ArrowDropDownIcon />
            </div>
          </div>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          ></IconButton>
          {isLoggedIn && (
            <Button
              variant="outlined"
              onClick={handleLogOut}
              style={{ color: "white" }}
            >
              Logout
            </Button>
          )}
          <MoreIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
