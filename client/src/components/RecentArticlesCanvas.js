import {
  Box,
  Divider,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";

const RecentArticlesCard = ({ article }) => {
  return (
    <Box>
      <Box
        component={Link}
        to={`/articles/${article.id}`}
        display="flex"
        flexDirection="row"
        alignItems="center"
        px="10px"
        py="15px"
        sx={{
          textDecoration: "none",
          "&:hover": {
            bgcolor: "custom.bglayer",
          },
        }}
      >
        <FeedOutlinedIcon
          fontSize="large"
          sx={{ color: "primary.main", p: "20px" }}
        />
        <Box display="flex" flexDirection="column">
          <Typography color="black" fontWeight="bold">
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            display="-webkit-box"
            overflow="hidden"
            sx={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.description}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export const RecentArticlesCanvas = () => {
  const [articlePreviews, setArticlePreviews] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    // modify to fetch upto 7/8 articles only
    axios
      .get(`${process.env.REACT_APP_SERVER_PREFIX}/articles`)
      .then((res) => {
        if (res.status === 200) {
          setArticlePreviews(res.data);
          setShowSpinner(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowSpinner(false);
      });
  }, []);

  return (
    <Box display="flex" flex={1} flexDirection="column">
      <Typography color="primary.main" fontWeight="medium" fontSize="1.2rem">
        Recent Articles
      </Typography>

      <Box flex={1} display="flex">
        {showSpinner ? (
          <Box
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        ) : articlePreviews.length === 0 ? (
          <Box
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography>No Articles available</Typography>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" flex={1}>
            {articlePreviews.map(
              (article, index) =>
                index < 5 && (
                  <RecentArticlesCard key={article.id} article={article} />
                )
            )}
          </Box>
        )}
      </Box>

      <Button
        sx={{ alignSelf: "end", mt: "10px" }}
        color="primary"
        variant="text"
        component={Link}
        to={"/articles"}
      >
        View All Articles
        <EastIcon />
      </Button>
    </Box>
  );
};
