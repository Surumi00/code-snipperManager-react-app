import React from "react";
import Sidebar from "../components/Sidebar";
import RecentSnippet from "../components/RecentSnippet";
import ViewSnippet from "../components/ViewSnippet";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        {/* Top Bar */}
        <div className="top-bar">

          <input
            type="text"
            placeholder="Search snippets, tags, languages..."
            className="search-box"
          />

          <button className="add-btn">
            Add Snippet
          </button>

        </div>

        {/* Body */}
        <div className="content-area">

          <div className="recent-section">
            <RecentSnippet />
          </div>

          <div className="view-section">
            <ViewSnippet />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;