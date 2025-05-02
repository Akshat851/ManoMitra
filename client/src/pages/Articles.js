import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getSearchResult = () => {
    // call api and fetch data only if searchTerm.tirm.length is greater than 0
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getSearchResult();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Box
        sx={{
          p: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl
          sx={{
            maxWidth: "800px",
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
          variant="outlined"
          fullWidth
        >
          <InputLabel>Search For Articles</InputLabel>
          <OutlinedInput
            value={searchTerm}
            onChange={handleSearch}
            label="Search For Articles"
            onKeyDown={handleKeyPress}
            sx={{
              input: { color: "primary.main" },
            }}
            endAdornment={
              <InputAdornment position="end">
                {searchTerm.length !== 0 && (
                  <IconButton
                    onClick={() => {
                      setSearchTerm("");
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <IconButton onClick={getSearchResult}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};
