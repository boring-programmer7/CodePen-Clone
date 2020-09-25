import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import useLocalStorage from "./Hooks/useLocalStorage";
import { initHTML, initCSS, initJS } from "./Hooks/inits";

function App() {
  const [html, setHtml] = useLocalStorage("html", initHTML);
  const [css, setCss] = useLocalStorage("css", initCSS);
  const [javascript, setJavascript] = useLocalStorage("js", initJS);
  const [srcDoc, setSrcdoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcdoc(`
    <html>
    <style>${css}</style>
      <body>${html}</body>
      <script>${javascript}</script>
    </html>
  `);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, javascript]);

  return (
    <div className="App">
      <div className="bottom">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="top">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
    </div>
  );
}

export default App;
