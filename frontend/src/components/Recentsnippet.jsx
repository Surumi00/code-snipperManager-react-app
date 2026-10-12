import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecentSnippet.css";

const RecentSnippet = ({ onselectsnippet }) => {
  const [recentSnippet, setRecentSnippet] = useState([]);
  
  // fetching the entire snippet data 
  const fetchData = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/view-snippet`)
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

  // function to delete a snippet by its ID

  const deleteSnippet = (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/delete-snippet/${id}`)
      .then((res) => {
        alert("Snippet deleted successfully");
        fetchData(); 
      })
      .catch((err) => {
        console.log(err);
      });
  };





  return (
    <div className="recent-container">
      <div className="recent-header">
        <h3>RECENT SNIPPETS</h3>
      </div>

      <div className="snippet-list">
        {recentSnippet.map((value, index) => (
          <div className="snippet-card" key={value._id} onClick={() => onselectsnippet(value)}
          
          
          
          
          >
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

  <div className="snippet-info">

    <span>{value.language}</span>

    {value.tags && value.tags.length > 0 && (
      <>
        <span className="separator">•</span>

        <span className="tags">
          {value.tags.join(", ")}
        </span>
      </>
    )}

  </div>

  <button
    className="delete-btn"
    onClick={(event) => {
      event.stopPropagation();
      deleteSnippet(value._id);
    }}
  >
    ✕
  </button>

</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSnippet;