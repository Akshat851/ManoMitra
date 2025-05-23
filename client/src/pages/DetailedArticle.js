import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import background_image from "../images/background.jpg";
import axios from "axios";

export const DetailedArticle = () => {
  const { articleId } = useParams();

  const [article, setArticle] = useState({
    id: null,
    title: null,
    author: null,
    image: null,
    publishedAt: null,
    content: null,
    description: null,
  });
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PREFIX}/articles/${articleId}`)
      .then((res) => {
        if (res.status === 200) {
          setArticle(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowSpinner(false);
      });
  }, [articleId]);

  const date = new Date(article.publishedAt);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

  return (
    <Box
      p="20px"
      display="flex"
      maxWidth="1000px"
      alignSelf="center"
      width="100%"
      boxSizing="border-box"
      flex={1}
    >
      {showSpinner ? (
        <Box
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flex={1} flexDirection="column">
          <Typography
            fontWeight="bold"
            variant="h4"
            color="primary.main"
            alignSelf="center"
          >
            {article.title}
          </Typography>
          <Typography
            pt="15px"
            fontWeight="bold"
            fontStyle="italic"
            alignSelf="center"
          >
            {article.description}
          </Typography>
          <Box
            py="15px"
            display="flex"
            flexDirection="row"
            alignSelf="center"
            flexWrap="wrap"
            color="text.secondary"
            gap={4}
          >
            <Typography fontStyle="italic">by {article.author}</Typography>
            <Typography fontStyle="italic">{formattedDate}</Typography>
          </Box>
          <Box
            sx={{
              aspectRatio: "16 / 5",
              overflow: "hidden",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            component="img"
            src={background_image}
          />
          <Typography pt="20px" textAlign="justify">
            {article.content}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
