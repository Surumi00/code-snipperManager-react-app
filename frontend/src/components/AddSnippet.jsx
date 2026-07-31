import React, { useState } from 'react'
import axios from 'axios'
import "./Addsnippet.css";


const AddSnippet = () => {

    const [input,setinput]=useState({
        title : "",
        language : "",
        code : "",
        description : "",
        tags : "",
        createdAt : ""
    })

    const inputHandler =(event)=>{
        setinput({...input,[event.target.name]:event.target.value})
    }

    const dataHandler=()=>{


        axios.post("http://localhost:3000/add-snippet",input).then(
            (res)=>{
                setinput(res.data)
                alert("data added")
            }
        ).catch(
            (error)=>{
                console.log(error.res.data);
                console.log(error.res.status);
                
                
            }
        )
    }







  return (
    <div>

        
    <div className="form-container">

        <div className="form-card">

            <h1> Add New Snippet</h1>

            <div className="input-group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={inputHandler}
                    placeholder="Enter snippet title"
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
                />
            </div>

            <div className="input-group">
                <label>Code</label>

                <textarea
                    name="code"
                    value={input.code}
                    onChange={inputHandler}
                    placeholder="Paste your code here..."
                ></textarea>

            </div>

            <div className="input-group">
                <label>Description</label>

                <textarea
                    name="description"
                    value={input.description}
                    onChange={inputHandler}
                    placeholder="Brief description..."
                ></textarea>

            </div>

            <div className="input-group">
                <label>Tags</label>
                <input
                    type="text"
                    name="tags"
                    value={input.tags}
                    onChange={inputHandler}
                    placeholder="react,nodejs,mongodb"
                />
            </div>

            <div className="input-group">
                <label>Created At</label>
                <input
                    type="date"
                    name="createdAt"
                    value={input.createdAt}
                    onChange={inputHandler}
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
  )
}

export default AddSnippet