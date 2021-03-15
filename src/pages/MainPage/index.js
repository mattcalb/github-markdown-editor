import React, { useState } from "react";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

import gitHubMark from "../../assets/images/GitHub-Mark-32px.png";

import "./style.css";

function MainPage() {
  const [input, setInput] = useState(
    JSON.parse(localStorage.getItem("input")) || ""
  );

  function handleChangeInput(e) {
    setInput(e.target.value);

    saveInputToLocalStorage(e.target.value);
  }

  function saveInputToLocalStorage(input) {
    localStorage.setItem("input", JSON.stringify(input));
  }

  return (
    <main>
      <header>
        <h1>GitHub Markdown Editor</h1>  
        <p>help developers write markdown</p>
        <div className="link-container">
          <a
            className="link"
            href="https://guides.github.com/features/mastering-markdown/"
          >
            Learn GitHub Markdown
          </a>
          <a
            href="https://github.com/mattcalb/github-markdown-editor"
          >
            <img src={gitHubMark}></img>
          </a>
        </div>      
      </header>
      <div className="editor-container">
        <textarea
          className="editor"
          placeholder="Some markdown here..."
          value={input}
          onChange={(e) => handleChangeInput(e)}
        ></textarea>
        <ReactMarkdown plugins={[gfm]} children={input} className="preview" />
      </div>
    </main>
  );
}

export default MainPage;
