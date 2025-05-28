import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const NavigationBar = () => {
  const theme = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  const navItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Articles",
      to: "/articles",
    },
    {
      text: "News",
      to: "/news",
    },
    {
      text: "Contact Us",
      to: "/contact",
    },
    {
      text: "Chat",
      to: "/chat",
    },
    {
      text: "Counsellors",
      to: "/counsellors",
    },
    {
      text: "About Us",
      to: "/aboutus",
    },
  ];
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "custom.navbar",
        }}
      >
        <Toolbar>
          <Box display={{ xs: "none", md: "flex" }} flex={1}>
            {navItems.map((item) => (
              <Box
                key={item.text}
                p="10px"
                display="flex"
                flexDirection="row"
                gap={1}
                borderRadius="50px"
                color="inherit"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    background: theme.palette.custom.darkHover,
                  },
                }}
                component={Link}
                to={item.to}
              >
                {item.text === "Home" && <HomeIcon />}
                <Typography>{item.text}</Typography>
              </Box>
            ))}
          </Box>
          <Box display={{ sm: "flex", md: "none" }} flex={1}>
            <IconButton
              color="inherit"
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            p="10px"
            borderRadius="50px"
            component={Link}
            to={"/login"}
            color="inherit"
            sx={{
              textDecoration: "none",
              background: theme.palette.custom.darkHover,
            }}
          >
            Login
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={showSidebar}
        sx={{ display: { sm: "flex", md: "none" } }}
        onClose={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        <Box bgcolor="custom.navbar" flexGrow={1} py={2.5}>
          <Box display="flex" justifyContent="flex-end" mx={2.5}>
            <IconButton
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box mx={7}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.text}>
                  <ListItemButton
                    onClick={() => {
                      setShowSidebar(!showSidebar);
                    }}
                    component={Link}
                    to={item.to}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
