import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const urlAuth = () => {
    const clientId = 't1P2StsZD2h7oaeOvJw2oO'
    const engine = 'http://localhost:4000'
    const username = 'champ8644'
    return `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${engine}/line/redirect&scope=notify&state=${username}`
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a target="_blank" href="urlAuth">
          เชื่อมต่อ LINE
        </a>
      </header>
    </div>
  )
}

export default App
