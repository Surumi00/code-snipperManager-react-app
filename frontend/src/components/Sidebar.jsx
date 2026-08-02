import React from 'react'
import logo from "../assets/snippy.png";
import "./Sidebar.css";
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
            <span>Dashboard</span>
        </a>
        <a>
            <span className="nav-icon">🗂</span>
            <span>My Snippets</span>
        </a>
        <a>
            <span className="nav-icon">👤</span>
            <span>Profile</span>
        </a>
        <a>
            <span className="nav-icon">⏻</span>
            <span>Log out</span>
        </a>
    </nav>

    <div className="user-info">
        <p>suru@snippy</p>
        <small>24 snippets saved</small>
    </div>
</div>
  )
}

export default Sidebar