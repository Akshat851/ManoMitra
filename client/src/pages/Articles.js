import React, { useEffect, useState, useMemo } from "react";
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
  CircularProgress,
} from "@mui/material";
import background_image from "../images/background.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

// debounce search
// pagination and lazy loading
// remove truncate text function implementation
// store and fetch real image from backend
// need to add some margin/padding in card for mobile screen
// image to take full width incase of mobile screens
// if user is doctor give option for adding new article and edit his existing ones

const truncateText = (text, maxLength = 100) =>
  text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text || "";

const ArticlePreview = ({ article }) => {
  const { id, title, author, description, publishedAt } = article;

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(publishedAt));
  }, [publishedAt]);

  return (
    <Card
      sx={{ display: "flex", maxWidth: "md", my: 2, flexWrap: "wrap" }}
      component={Link}
      to={`/articles/${id}`}
    >
      <CardMedia
        component="img"
        sx={{ width: 250, objectFit: "cover" }}
        image={background_image}
        alt={title}
      />
      <Box display="flex" flexDirection="column" flex={1}>
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
          <Grid container spacing={1} sx={{ mt: 1 }}>
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
  );
};

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PREFIX}/articles`)
      .then((res) => {
        setArticles(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getSearchResult();
    }
  };

  const getSearchResult = () => {
    if (searchTerm.trim().length === 0) return;
    // TODO: implement search logic (e.g., fetch or filter locally)
  };

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Box p={2.5} display="flex" justifyContent="center">
        <FormControl
          sx={{
            maxWidth: "md",
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "primary.main",
            },
          }}
          fullWidth
          variant="outlined"
        >
          <InputLabel>Search For Articles</InputLabel>
          <OutlinedInput
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
            label="Search For Articles"
            sx={{ input: { color: "primary.main" } }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton onClick={getSearchResult}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              searchTerm && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearchTerm("")}>
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </FormControl>
      </Box>

      <Box
        alignSelf="center"
        flex={1}
        maxWidth="md"
        width="100%"
        display="flex"
      >
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <CircularProgress />
          </Box>
        ) : articles.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Typography>No Articles available</Typography>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" flex={1}>
            {articles.map((article) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
