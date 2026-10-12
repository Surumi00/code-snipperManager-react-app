import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Mysnippets.css";

const Mysnippets = () => {
  const [snippets, setSnippets] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/view-snippet`)
      .then((res) => {
        setSnippets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mysnippets-page">

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

          <button
            className="add-btn"
            onClick={() => navigate("/add-snippet")}
          >
            Add Snippet
          </button>

        </div>

        {/* Heading */}
        <div className="snippet-heading">
          <h1>My Snippets</h1>
          <span>{snippets.length} snippets</span>
        </div>

        {/* Snippet Cards */}
        <div className="snippet-grid">

          {snippets.map((value) => (
            <div className="snippet-card" key={value._id}>

              {/* Card Header */}
              <div className="card-header">

                <div className="language">
                  &lt;/&gt; {value.language}
                </div>

                <div className="date">
                  {new Date(value.createdAt).toLocaleDateString("en-GB")}
                </div>

              </div>

              {/* Title */}
              <h2>{value.title}</h2>

              {/* Description */}
              <p className="description">
                {value.description}
              </p>

              {/* Tags */}
              <div className="tags">
                {value.tags?.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Code Preview */}
              <div className="code-preview">
                <span className="line-number">1</span>

                <code>
                  {value.code}
                </code>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Mysnippets;