import React, { useEffect, useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export const NavigationBar = () => {
  const theme = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  const [username, setUsername] = useState("");
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
      text: "About Us",
      to: "/aboutus",
    },
  ];
  const [openUserProfileForm, setOpenUserProfileForm] = useState(false);

  useEffect(() => {
    const authorization = localStorage.getItem("Authorization");
    if (authorization && authorization.trim()) {
      axios
        .get(`${process.env.REACT_APP_SERVER_PREFIX}/auth/validate-token`, {
          headers: {
            Authorization: `Bearer ${authorization}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            let tempUsername = res.data.name;
            if (tempUsername && tempUsername.trim()) {
              const myArray = tempUsername.split(" ");
              if (myArray.length >= 2) {
                setUsername(myArray[0].charAt(0) + myArray[1].charAt(0));
              } else {
                setUsername(myArray[0].charAt(0));
              }
            }
            localStorage.setItem("email", res.data.email);
          } else {
            localStorage.clear();
          }
        })
        .catch((err) => {
          console.error("Error validating user", err);
          localStorage.clear();
        });
    }
  }, [username]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setUsername("");
    setOpenUserProfileForm(false);
    window.location.reload();
  };

  return (
    <Box>
      <AppBar
        position="fixed"
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
          {username && username.trim() !== "" ? (
            <Typography
              p="10px"
              borderRadius="50px"
              color="inherit"
              onClick={() => {
                setOpenUserProfileForm(true);
              }}
              sx={{
                textDecoration: "none",
                background: theme.palette.custom.darkHover,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {username.toUpperCase()}
            </Typography>
          ) : (
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
          )}
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
      {openUserProfileForm && (
        <Dialog
          open={openUserProfileForm}
          onClose={() => setOpenUserProfileForm(false)}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle sx={{ m: 0, p: 2, color: "primary.main" }}>
            {username}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleLogout}>Logout?</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};
