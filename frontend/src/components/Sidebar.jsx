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
        <a className="active">Dashboard</a>
        <a>My Snippets</a>
        <a>Profile</a>
        <a>Logout</a>
    </nav>

    <div className="user-info">
        <p>suru@snippy</p>
        <small>0 snippets saved</small>
    </div>
</div>
  )
}

export default Sidebar