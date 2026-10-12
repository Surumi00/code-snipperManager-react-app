import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewsnippet.css";
import Editor from "@monaco-editor/react";

const ViewSnippet = ({ snippet }) => {

  


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






  return (
    <div className="code-container">

      {snippet && (

        <div className="code-box">

          <div className="code-header">

            <div className="window-buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
           
            <h3>{snippet.title}</h3>

          </div>

       <Editor
  beforeMount={handleEditorWillMount}
  theme="snippy-dark"
  language={snippet.language.toLowerCase()}
  value={snippet.code}
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