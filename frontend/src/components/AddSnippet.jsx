import React, { useState } from 'react'
import axios from 'axios'
import "./Addsnippet.css";
import Sidebar from './Sidebar';

const AddSnippet = () => {

    const [input, setinput] = useState({
        title: "",
        language: "",
        code: "",
        description: "",
        tags: "",
        createdAt: ""
    });

    const inputHandler = (event) => {
        setinput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const dataHandler = () => {
         if (
        !input.title.trim() ||
        !input.language.trim() ||
        !input.code.trim() ||
        !input.description.trim() ||
        !input.tags.trim()
    ) {
        alert("Please fill in all the fields");
        return;
    }

        axios.post("http://localhost:3000/add-snippet", input)
            .then((res) => {

                alert("data added");

                // Clear form after adding
                setinput({
                    title: "",
                    language: "",
                    code: "",
                    description: "",
                    tags: "",
                    createdAt: ""
                });

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div className="add-snippet-page">

            {/* SIDEBAR */}
            <Sidebar />

            {/* FORM AREA */}
            <div className="form-container">

                <div className="form-card">

                    <h1>Add New Snippet</h1>

                    <div className="input-group">
                        <label>Title</label>

                        <input
                            type="text"
                            name="title"
                            value={input.title}
                            onChange={inputHandler}
                            placeholder="Enter snippet title"
                            required
                        />
                    </div>


                    <div className="input-group">
                        <label>Programming Language</label>

                        <input
                            type="text"
                            name="language"
                            value={input.language}
                            onChange={inputHandler}
                            placeholder="JavaScript, Python..."
                            required
                        />
                    </div>


                    <div className="input-group">
                        <label>Code</label>

                        <textarea
                            name="code"
                            value={input.code}
                            onChange={inputHandler}
                            placeholder="Paste your code here..."
                            required
                        />
                    </div>


                    <div className="input-group">
                        <label>Description</label>

                        <textarea
                            name="description"
                            value={input.description}
                            onChange={inputHandler}
                            placeholder="Brief description..."
                        />
                    </div>


                    <div className="input-group">
                        <label>Tags</label>

                        <input
                            type="text"
                            name="tags"
                            value={input.tags}
                            onChange={inputHandler}
                            placeholder="react,nodejs,mongodb"
                            required
                        />
                    </div>


                    <div className="input-group">
                        <label>Created At</label>

                        <input
                            type="date"
                            name="createdAt"
                            value={input.createdAt}
                            onChange={inputHandler}
                            required
                        />
                    </div>


                    <button
                        className="submit-btn"
                        onClick={dataHandler}
                    >
                        Save Snippet
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AddSnippet;