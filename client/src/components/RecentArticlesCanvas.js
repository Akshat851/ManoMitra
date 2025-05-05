import { Box, Divider, Typography, Button } from "@mui/material";
import React from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

// fetch it from api
const articlePreviews = [
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description:
      "short desc Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    _id: "t1ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t2ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t3ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t4ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t5ech-ai",
  },
];

const RecentArticlesCard = ({ article }) => {
  return (
    <Box>
      <Box
        component={Link}
        to={`/articles/${article._id}`}
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
  return (
    <Box flex={1} display="flex" flexDirection="column">
      <Typography color="primary.main" fontWeight="medium" fontSize="1.2rem">
        Recent Articles
      </Typography>
      {articlePreviews.map((article) => {
        return <RecentArticlesCard key={article._id} article={article} />;
      })}
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
