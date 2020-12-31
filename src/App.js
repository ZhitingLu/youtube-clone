import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideo/RecommendedVideos";
import SearchPage from "./components/SearchPage/SearchPage";
import "./App.css";

function App() {
  return (
    <div className="app">
       <Router>
        <Header /> 

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>

      </Router>
      
      {/* <h1>Building a Youtube Clone 🎞️</h1> */}

      {/* Header -> <Header /> */}
      {/* <Header /> */}

      {/* Sidebar  -> <Sidebar /> */}
      {/* RecommendedVideo -> <RecommendedVideo /> */}
      {/* <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div> */}

    </div>
  );
}

export default App;
