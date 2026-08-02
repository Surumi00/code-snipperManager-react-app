import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewsnippet.css";
import Editor from "@monaco-editor/react";

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


  // monocode editor theme customization function

function handleEditorWillMount(monaco) {
  monaco.editor.defineTheme("snippy-dark", {
    base: "vs-dark",
    inherit: true,

    rules: [],

    colors: {
      "editor.background": "#000000",
      "editorGutter.background": "#000000",
      "editorLineNumber.foreground": "#6b7280",
      "editor.lineHighlightBackground": "#0d0d0d",
      "editorCursor.foreground": "#ffffff",
      "editor.selectionBackground": "#5b21b655",
    },
  });
}





 console.log(viewSnippet[2]);
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
           
            <h3>{viewSnippet[2].title}</h3>

          </div>

       <Editor
  beforeMount={handleEditorWillMount}
  theme="snippy-dark"
  language={viewSnippet[2].language.toLowerCase()}
  value={viewSnippet[2].code}
  height="100%"
  options={{
    automaticLayout: true,
    minimap: { enabled: false },

    fontSize: 15,
    fontFamily: "JetBrains Mono, Consolas, monospace",
    lineHeight: 24,

    wordWrap: "on",
    scrollBeyondLastLine: false,

    glyphMargin: false,
    folding: true,
    renderLineHighlight: "gutter",

    scrollbar: {
      vertical: "auto",
      horizontal: "hidden",
      verticalScrollbarSize: 6,
      useShadows: false,
    },
  }}
/>
        </div>

      )}

    </div>
  );
};

export default ViewSnippet;