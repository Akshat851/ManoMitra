import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { NavLink, Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const NavigationBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#333333",
        boxShadow: "0px 0px 5px #1a1a1a",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          height: 50,
          padding: "0 25px",
          fontSize: "x-large",
          fontFamily: "Calibri",
        }}
      >
        <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
          <IconButton>
            <HomeIcon color="primary" />
          </IconButton>

          <MuiLink
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, ml: 1 }}
          >
            Dashboard
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/topics"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, ml: 2 }}
          >
            Topics
          </MuiLink>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Add user functionality
        </Box>
      </Toolbar>
    </AppBar>
  );
};
