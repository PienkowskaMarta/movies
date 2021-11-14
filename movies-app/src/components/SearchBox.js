import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchBox = (props) => {
  return (
    <Box
      component="form"
      sx={{
        marginLeft: "40%",
        marginTop: "4rem",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search movie..."
        variant="outlined"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </Box>
  );
};

export default SearchBox;
