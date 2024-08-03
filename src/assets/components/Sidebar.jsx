import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Rowing } from "@mui/icons-material";


const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {setSelectedCategory(category.name)}}
        style={{
          background: category.name === selectedCategory && "rgb(3, 103, 203)",
          color: "white"
        }
        }
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "rgb(96, 167, 237)", marginRight: "15px" }}>
          {<category.icon/>}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
        
      </button>
    ))}
  </Stack>
  )
}

export default Sidebar;

