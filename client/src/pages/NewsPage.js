import { Box, CircularProgress, Typography } from "@mui/material";
import { NewsCard } from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";

// perform lazy load and pagination
export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PREFIX}/news`)
      .then((res) => {
        setNews(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box
      alignItems="center"
      flexDirection="column"
      pt="20px"
      alignSelf="center"
      flex={1}
      width="100%"
      display="flex"
    >
      <Typography variant="h4" color="primary.main" fontWeight="bold">
        Latest Health News
      </Typography>
      {loading ? (
        <Box display="flex" alignItems="center" flex={1}>
          <CircularProgress />
        </Box>
      ) : news.length === 0 ? (
        <Box display="flex" alignItems="center" flex={1}>
          <Typography>No News available</Typography>
        </Box>
      ) : (
        <Box
          p="20px"
          flexWrap="wrap"
          justifyContent="center"
          display="flex"
          flexDirection="row"
          flex={1}
        >
          {news.articles.map((item, index) => {
            return <NewsCard key={index} item={item} />;
          })}
        </Box>
      )}
    </Box>
  );
};
