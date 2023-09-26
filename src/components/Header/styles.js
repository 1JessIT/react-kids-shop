import styled from "@emotion/styled";
import { IconButton, Input, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const MyHeader = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 100px",
  width: "100%",
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "inline",
  },
}));

export const NavMenu = styled("nav")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "40px",
  gap: "70px",
}));

export const NavLink = styled(Link)(() => ({
  color: "white",
  fontSize: "16px",
  textDecoration: "none",
}));

export const SearchBar = styled(Input)(() => ({
  border: "none",
  padding: "8px 10px",
  borderRadius: "62px",
  background: "#F0F0F0",
  maxHeight: "48px",
  width: "500px",
}));
