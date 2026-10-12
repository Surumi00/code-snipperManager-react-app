import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
import Recentsnippet from './components/Recentsnippet'
import AddSnippet from './components/AddSnippet'
import ViewSnippet from './components/ViewSnippet'
import Home from './pages/Home'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Mysnippets from './pages/Mysnippets'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mysnippets" element={<Mysnippets />} />
          <Route path="/add-snippet" element={<AddSnippet />} />
          <Route path="/view-snippet" element={<ViewSnippet />} />
        </Routes>
      </BrowserRouter>
      
      
      
      
    </>
  )
}

export default App
