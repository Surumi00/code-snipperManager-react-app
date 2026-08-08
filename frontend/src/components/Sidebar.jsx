import React from 'react'
import logo from "../assets/snippy.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="logo">
    <img src={logo} alt="Snippy Logo" className="logo-img" />
    <span>Snippy</span>
</div>

    <nav>
        <a className="active">
            <span className="nav-icon">▣</span>
            <Link className="nav-link" to="/">Dashboard</Link>
        </a>
        <a>
            <span className="nav-icon">🗂</span>
            <Link className="nav-link" to="/Mysnippets">My Snippets</Link>
        </a>
        <a>
            <span className="nav-icon">👤</span>
            <Link className="nav-link" to="/profile">Profile</Link>
        </a>
        <a>
            <span className="nav-icon">⏻</span>
            <Link className="nav-link" to="/logout">Log out</Link>
        </a>
    </nav>

    <div className="user-info">
        <p>suru@snippy</p>
        <small></small>
    </div>
</div>
  )
}

export default Sidebar