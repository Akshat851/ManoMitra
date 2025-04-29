import { Box, Typography } from "@mui/material";
import { NewsCard } from "../components/NewsCard";

// need to fetch it from api
// perform lazy load
// show loading animation while fetching
const news = {
  status: "ok",
  totalResults: 69,
  articles: [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Sally Wadya",
      title:
        "How to get more of a nutrient that might help your memory - The Washington Post",
      description:
        "Many people don’t get enough choline, which is important for body and cognitive functions. Here’s how to make sure you’re getting enough.",
      url: "https://www.washingtonpost.com/wellness/2025/04/28/choline-nutrient-memory-brain-health/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NT2AAJPQSU5HHFTJO5FXND2NFE.jpg&w=1440",
      publishedAt: "2025-04-28T18:02:21Z",
      content:
        "Consumer Reports has no financial relationship with any advertisers on this site.\r\nYou often hear that fish is brain food. True, but so are eggs, pork loin and Brussels sprouts. Thats because theyre … [+4263 chars]",
    },
    {
      source: {
        id: null,
        name: "WRAL.com",
      },
      author: "WRAL staff",
      title:
        "SPCA of Wake County temporarily closing due to parvo outbreak - WRAL.com",
      description:
        "The SPCA of Wake County will close temporarily April 27-May 2 for deep cleaning due to a recent outbreak of canine parvovirus (CPV).",
      url: "https://www.wral.com/lifestyle/health/spca-wake-county-parvo-outbreak-closing-april-2024/",
      urlToImage:
        "https://images.wral.com/c2cceef3-06f2-49c2-9f11-09ce10b7d8c3?w=1200&h=630",
      publishedAt: "2025-04-28T14:44:52Z",
      content:
        "The SPCA of Wake County will close temporarily April 27-May 2 for deep cleaning due to a recent outbreak of canine parvovirus (CPV).\r\nAlthough the adoption center on Petfinder Lane will be closed for… [+1752 chars]",
    },
    {
      source: {
        id: null,
        name: "GoodHousekeeping.com",
      },
      author: "Julie Stewart",
      title:
        "Study Says If You're Over 60, Taking This Type of Fiber Supplement Can Improve Your Brain Health - AOL.com",
      description:
        "If you want to boost your memory and think more clearly, a new study suggests consuming prebiotic fiber supplements.",
      url: "https://www.goodhousekeeping.com/health/diet-nutrition/a64542423/study-fiber-supplements-brain-health/",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/Ugw3wZfbIT8JHZ8Q6EU9NA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/aol_good_housekeeping_154/a665c50d17cd03582696add1f08d2a2f",
      publishedAt: "2025-04-28T14:17:33Z",
      content:
        'If You\'re Over 60, Consider This Supplement Maskot - Getty Images\r\n"Hearst Magazines and Yahoo may earn commission or revenue on some items through these links."\r\nEating more fiber is a smart choice … [+4695 chars]',
    },
    {
      source: {
        id: null,
        name: "Eatthis.com",
      },
      author: "Leah Groth",
      title:
        "The Best Walking Routine To Burn Belly Fat in Just 20 Minutes - Eat This Not That",
      description:
        "Celebrity trainer Jenna Willis shares the best 20-minute walking routine to target stubborn belly fat.",
      url: "https://www.eatthis.com/20-minute-walking-routine-burn-belly-fat/",
      urlToImage:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2024/12/woman-running-treadmill.jpg?quality=82&strip=all",
      publishedAt: "2025-04-28T14:02:16Z",
      content:
        "Do you want to burn belly fat without having to go to the gym? You can, according to a top expert. Celebrity fitness trainer and health and wellness expert Jenna Willis designs strength training rout… [+1859 chars]",
    },
    {
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "Neuroscience News",
      title:
        "Immune Dysfunction May Drive Alzheimer’s Progression - Neuroscience News",
      description:
        "A new study highlights a potential role for immune system dysfunction in the onset and progression of Alzheimer's disease.",
      url: "https://neurosciencenews.com/neuroinflammation-alzheimers-28755/",
      urlToImage:
        "https://neurosciencenews.com/files/2025/04/neuroinflammation-Alzheimers-neuroscience.jpg",
      publishedAt: "2025-04-28T13:59:54Z",
      content:
        "Summary: A new study highlights a potential role for immune system dysfunction in the onset and progression of Alzheimer’s disease. Researchers found that neuroinflammation, trained innate immune mem… [+5271 chars]",
    },
    {
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "Neuroscience News",
      title:
        "Cannabis Use Disorder Linked to Psychosis Brain Changes - Neuroscience News",
      description:
        "New research shows that individuals with cannabis use disorder have elevated dopamine levels in brain regions associated with psychosis.",
      url: "https://neurosciencenews.com/cannabis-use-disorder-psychosis-28746/",
      urlToImage:
        "https://neurosciencenews.com/files/2025/04/psychosis-cud-neuroscience.jpg",
      publishedAt: "2025-04-28T13:33:52Z",
      content:
        "Summary: New research shows that individuals with cannabis use disorder have elevated dopamine levels in brain regions associated with psychosis. Using neuromelanin-sensitive MRI scans, scientists fo… [+8121 chars]",
    },
  ],
};

export const NewsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "20px",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="primary.main" fontWeight="bold">
        Latest Health News
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {news.articles.map((item, index) => {
          return <NewsCard key={index} item={item} />;
        })}
      </Box>
    </Box>
  );
};
