import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = (props) => {
  const inputStyle = {
    WebkitBoxShadow: "0 0 0 1000px white inset",
    height: "3rem",
    paddingLeft: "1.5rem",
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="center"
    >
      <SearchIcon />
      <TextField
        id="outlined-basic"
        variant="standard"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        inputProps={{ style: inputStyle }}
        sx={{ width: "35ch" }}
        placeholder="Search movie..."
        padding="2px 2px 2px 2px"
      />
    </Box>
  );
};

export default SearchBox;
