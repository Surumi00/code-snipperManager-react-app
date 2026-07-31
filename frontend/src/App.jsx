import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
import Recentsnippet from './components/Recentsnippet'
import AddSnippet from './components/AddSnippet'

function App() {
  

  return (
    <>
      <Sidebar/>
      <AddSnippet/>
      <Recentsnippet/>
    </>
  )
}

export default App
