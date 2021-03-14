import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

import gitHubMark from '../../assets/images/GitHub-Mark-32px.png';

import './style.css';

function MainPage() {

    const [input, setInput] = useState(JSON.parse(localStorage.getItem('input')) || '');

    function handleChangeInput(e) {
        setInput(e.target.value);

        saveInputToLocalStorage(e.target.value);
    }

    function saveInputToLocalStorage(input) {
        localStorage.setItem('input', JSON.stringify(input));
    }

    return (
        <div>
            <header>
                <h1>GitHub Markdown Editor</h1>
                <a className="link" href="https://guides.github.com/features/mastering-markdown/">Learn GitHub Markdown</a>
            </header>
            <div className="editor-container">
                <textarea className="editor" placeholder="Some markdown here..." value={input} onChange={e => handleChangeInput(e)}></textarea>
                <ReactMarkdown children={input} className="preview" />
            </div>
            <footer>
                <a href="https://github.com/mattcalb"><img src={gitHubMark} alt="GitHub Mark"/></a>
            </footer>
        </div>
    )
};

export default MainPage;