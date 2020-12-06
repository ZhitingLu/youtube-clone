import React from "react";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideo/RecommendedVideos";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <h1>Building a Youtube Clone 🎞️</h1> */}

      {/* Header -> <Header /> */}
      <Header />

      {/* Sidebar  -> <Sidebar /> */}
      {/* RecommendedVideo -> <RecommendedVideo /> */}
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      <Footer />

    </div>
  );
}

export default App;
