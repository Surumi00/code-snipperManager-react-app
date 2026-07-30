import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecentSnippet.css";

const RecentSnippet = () => {
  const [recentSnippet, setRecentSnippet] = useState([]);

  const fetchData = () => {
    axios.post("http://localhost:3000/view-snippet")
      .then((res) => {
        setRecentSnippet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recent-container">
      <div className="recent-header">
        <h3>RECENT SNIPPETS</h3>
      </div>

      <div className="snippet-list">
        {recentSnippet.map((value, index) => (
          <div className="snippet-card" key={index}>
            <div className="snippet-top">
              <div className="snippet-title">
                <span className="dot"></span>
                <span>{value.title}</span>
              </div>

              <div className="snippet-time">
                {new Date(value.createdAt).toLocaleDateString()}
              </div>
            </div>

            <div className="snippet-bottom">
              <span>{value.language}</span>

              {value.tags && value.tags.length > 0 && (
                <>
                  <span className="separator">•</span>
                  <span>{value.tags.join(", ")}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSnippet;