import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import phone from "../images/phone.jpg";
import online_support from "../images/online_support.jpg";
import { Link } from "react-router-dom";
import { RecentArticles } from "../components/RecentArticles";

// need to fetch it from backend
const keywordData = [
  { word: "React", count: 30 },
  { word: "JavaScript", count: 50 },
  { word: "CSS", count: 20 },
  { word: "HTML", count: 15 },
  { word: "HTML", count: 15 },
  { word: "JavaScript", count: 50 },
  { word: "HTML", count: 15 },
];

const AvatarWithLabel = ({ src, label }) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Avatar
      src={src}
      sx={{
        width: 65,
        height: 65,
        borderRadius: "50%",
        margin: 1,
        border: "3px solid white",
      }}
    />
    <Box>{label}</Box>
  </Box>
);

const renderKeywords = (keywordsData) => {
  let maxCount = Number.MIN_VALUE;
  let minCount = Number.MAX_VALUE;

  for (const word of keywordsData) {
    maxCount = Math.max(maxCount, word.count);
    minCount = Math.min(minCount, word.count);
  }

  const keywords = keywordsData.map((data, i) => {
    const opacity = Math.random() * 0.5 + 0.5;
    const degrees = Math.random() * 20 - 10;
    const fontSize = `${
      12 + ((data.count - minCount) / (maxCount - minCount)) * 24
    }px`;

    return (
      <Typography
        sx={{
          fontSize: fontSize,
          transform: `rotate(${degrees}deg)`,
          opacity: opacity,
          marginRight: "5px",
          display: "inline-block",
          fontWeight: "bold",
          color: "primary.main",
        }}
        key={i}
      >
        {data.word}
      </Typography>
    );
  });

  return <>{keywords}</>;
};

export const HomePage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          flex: 6,
          bgcolor: "primary.light",
          m: 2,
          p: 2,
          borderRadius: "8px",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: "medium",
            fontSize: "1.2rem",
          }}
        >
          Recent Articles
        </Typography>
        <RecentArticles />
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 4,
          m: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            bgcolor: "primary.main",
            display: "flex",
            flexDirection: "row",
            p: 2,
            borderRadius: "8px",
            flexWrap: "wrap",
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              flex: 2,
              alignContent: "center",
              px: 3,
              fontSize: "1.5rem",
              color: "primary.light",
            }}
          >
            Are you currently experiencing a crisis?
          </Typography>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: 2,
                color: "primary.light",
              }}
            >
              <AvatarWithLabel src={phone} label="Phone" />
              <AvatarWithLabel src={online_support} label="Online" />
            </Box>
            <Box
              sx={{
                bgcolor: "primary.light",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                p: 1,
                borderRadius: "4px",
                color: "primary.main",
                textDecoration: "none",
                cursor: "pointer",
                border: `2px solid ${theme.palette.primary.main}`,
                "&:hover": {
                  border: `2px solid ${theme.palette.primary.light}`,
                  bgcolor: "primary.main",
                  color: "primary.light",
                },
              }}
              component={Link}
              to="/crisis"
            >
              Get help now
              <EastIcon />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 2,
            bgcolor: "primary.light",
            mt: 3,
            p: 2,
            borderRadius: "8px",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: "medium",
              fontSize: "1.2rem",
            }}
          >
            Trending Keywords
          </Typography>
          <Box
            sx={{
              flex: 1,
              alignContent: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {renderKeywords(keywordData)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
