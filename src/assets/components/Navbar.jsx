import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { Logo } from "./";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 1,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Logo />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
