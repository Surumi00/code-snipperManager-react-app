import React from "react";
import Sidebar from "../components/Sidebar";
import RecentSnippet from "../components/Recentsnippet";
import ViewSnippet from "../components/ViewSnippet";
import "./Home.css";
import{useNavigate} from "react-router-dom"
import { useState } from "react";


const Home = () => {
  const navigate = useNavigate();
  const[selectedSnippet, setSelectedSnippet] = useState(null);

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

          <button className="add-btn"
          
          onClick={()=>navigate("/add-snippet")}
          
          
          >
            Add Snippet
          </button>

        </div>

        {/* Body */}
        <div className="content-area">

          <div className="recent-section">
            <RecentSnippet onselectsnippet={setSelectedSnippet} />
          </div>

          <div className="view-section">
            <ViewSnippet snippet={selectedSnippet} />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;