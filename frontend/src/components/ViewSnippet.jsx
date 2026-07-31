import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewsnippet.css";

const ViewSnippet = () => {

  const [viewSnippet, setViewSnippet] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view-snippet")
      .then((res) => {
        setViewSnippet(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="code-container">

      {viewSnippet.length > 0 && (

        <div className="code-box">

          <div className="code-header">

            <div className="window-buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <h3>{viewSnippet[0].title}</h3>

          </div>

          <pre>
            <code>{viewSnippet[0].code}</code>
          </pre>

        </div>

      )}

    </div>
  );
};

export default ViewSnippet;