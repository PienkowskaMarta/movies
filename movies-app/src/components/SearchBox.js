import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = (props) => {
  const inputStyle = {
    WebkitBoxShadow: "0 0 0 1000px white inset",
    paddingLeft: "1.5rem",
    fontSize: "1.9rem",
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="center"
      sx={{ marginTop: "15rem" }}
    >
      <SearchIcon
        sx={{ position: "relative", top: "0.1rem", fontSize: "3rem" }}
      />
      <TextField
        id="outlined-basic"
        variant="standard"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        inputProps={{ style: inputStyle }}
        sx={{ width: "41ch" }}
        placeholder="SEARCH A MOVIE..."
        padding="2px 2px 2px 2px"
      />
    </Box>
  );
};

export default SearchBox;
