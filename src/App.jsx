import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="headerSection">
        <h1>
          Litigation Checklist Calculator
        </h1>
      </div>

      <div className="containers">
        <div className="NOCC">
          <h2> Notice of Civil Claim</h2>
        </div>

        <div className="CC">
          <h2> Counterclaim</h2>
        </div>

        <div className="RTCC">
          <h2> Response to Civil Claim</h2>
        </div>
      </div>
      
    </div>
  )
}

export default App
