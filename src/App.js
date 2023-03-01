import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
 Navbar,
 ChannelDetails,
 VideoDetails,
 SearchFeed,
 Feed,
} from "./components";

const App = () => {
 return (
  <Router>
   <Box sx={{ backgroundColor: "#000" }}>
    <Navbar />
    <Routes>
     <Route path="/" element={<Feed />} />
     <Route path="/video/:videoId" element={<VideoDetails />} />
     <Route path="/channel/:channelId" element={<ChannelDetails />} />
     <Route path="/search/:searchQuery" element={<SearchFeed />} />
    </Routes>
   </Box>
  </Router>
 );
};

export default App;
