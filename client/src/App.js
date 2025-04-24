import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "custom.bglayer",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavigationBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
