import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const RenderKeywords = ({ keywordObj }) => {
  const opacity = Math.random() * 0.5 + 0.5;
  const degrees = Math.random() * 20 - 10;
  const fontSize = `${Math.floor(Math.random() * 17) + 20}px`;

  return (
    <Typography
      fontSize={fontSize}
      mr="5px"
      fontWeight="bold"
      color="primary.main"
      sx={{
        transform: `rotate(${degrees}deg)`,
        opacity: opacity,
      }}
    >
      {keywordObj.word}
    </Typography>
  );
};

export const TrendingKeywordsCanvas = () => {
  const [keywordData, setKeywordData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PREFIX}/trending-keywords`)
      .then((res) => {
        if (res.status === 200) {
          setKeywordData(res.data);
          setShowSpinner(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowSpinner(false);
      });
  }, []);
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Typography color="primary.main" fontWeight="medium" fontSize="1.2rem">
        Trending Searches
      </Typography>
      <Box
        flex={1}
        alignContent="center"
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
      >
        {showSpinner ? (
          <CircularProgress />
        ) : keywordData.length === 0 ? (
          <Typography>No Keywords available</Typography>
        ) : (
          keywordData.map((keywordObj) => {
            return (
              <RenderKeywords key={keywordObj.id} keywordObj={keywordObj} />
            );
          })
        )}
      </Box>
    </Box>
  );
};
