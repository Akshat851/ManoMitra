import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import background_image from "../images/background.jpg";

const articlePreviews = [
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: background_image,
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t1ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: background_image,
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t2ech-ai",
  },
];

const truncateText = (text, maxLength = 100) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const Articles = () => {
  const { image, title, description, author, publishedAt } = articlePreviews[0];
  const date = new Date(publishedAt);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

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
      <Box alignSelf="center">
        <Card
          sx={{ display: "flex", maxWidth: 800, margin: 2, flexWrap: "wrap" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 250, objectFit: "cover" }}
            image={image}
            alt={title}
          />
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardContent>
              <Typography
                component="h2"
                variant="h6"
                gutterBottom
                color="primary.main"
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {truncateText(description, 120)}
              </Typography>
              <Grid container spacing={1} sx={{ marginTop: 1 }}>
                <Grid>
                  <Typography variant="caption" color="text.secondary">
                    {author}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="caption" color="text.secondary">
                    • {formattedDate}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
