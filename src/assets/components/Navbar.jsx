import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      boxSizing={"border-box"}
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
        <img src="/logo.jpg" alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
