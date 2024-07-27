import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Stack } from "@mui/material";
import InputAdorment from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,

        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "black",
      }}
    >
      <Stack direction="row">
        <InputAdorment
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ backgroundColor: "black", color: "white"  }}
        >
        
        </InputAdorment>
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <SearchIcon sx={{ color: "rgb(96, 167, 237)" }} />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default SearchBar;
