import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "state";
import styled from "styled-components";
import profileImage from "assets/Profile2.jpg";

import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  // MenuItem,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { logoutUser } from "state/authSlice";
import { toast } from "react-toastify";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const auth = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logoutUser(null));
    toast.warning("Logged Out!!", { position: "bottom-left" });
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {auth._id ? (
          <>
            {/* LEFT SIDE */}
            <FlexBetween>
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon />
              </IconButton>
              <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
              >
                <InputBase placeholder="Search..." />
                <IconButton>
                  <Search />
                </IconButton>
              </FlexBetween>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="1.5rem">
              <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlined sx={{ fontSize: "25px" }} />
                ) : (
                  <LightModeOutlined sx={{ fontSize: "25px" }} />
                )}
              </IconButton>
              <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px" }} />
              </IconButton>

              <FlexBetween>
                <Button
                  onClick={handleClick}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textTransform: "none",
                    gap: "1rem",
                  }}
                >
                  <Box
                    component="img"
                    alt="profile"
                    src={profileImage}
                    height="32px"
                    width="32px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  />
                  <Box textAlign="left">
                    <Typography
                      fontWeight="bold"
                      fontSize="0.85rem"
                      sx={{ color: theme.palette.secondary[100] }}
                    >
                      {auth.name}
                    </Typography>
                    <Typography
                      fontSize="0.75rem"
                      sx={{ color: theme.palette.secondary[200] }}
                    >
                      {auth.occupation}
                    </Typography>
                  </Box>
                  <ArrowDropDownOutlined
                    sx={{
                      color: theme.palette.secondary[300],
                      fontSize: "25px",
                    }}
                  />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isOpen}
                  onClose={handleLogout}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <Logout onClick={handleLogout}>Logout</Logout>
                </Menu>
              </FlexBetween>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="1.5rem">
            <FlexBetween>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </FlexBetween>
            <FlexBetween>
              <AuthLinks>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </AuthLinks>
            </FlexBetween>
          </FlexBetween>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const AuthLinks = styled.div`
  a {
    color: white;
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Logout = styled.div`
  color: white;
  cursor: pointer;
`;
