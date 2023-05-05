import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NOCCTable from './components/NOCC_Table'
import CCTable from './components/CC_Table'
import RTCCTable from './components/RTCC_Table'
import DatePicker from './components/DatePicker'
import DatePicker1 from './components/DatePicker1'
import DatePicker2 from './components/DatePicker2'

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
          <DatePicker/>
          <NOCCTable jrDate={"hi"}/>
          {/* this.addDays(20,09,2002,10) */}
        </div>

        <div className="CC">
          <h2> Counterclaim</h2>
          <DatePicker1/>
          <CCTable></CCTable>
        </div>

        <div className="RTCC">
          <h2> Response to Civil Claim</h2>
          <DatePicker2/>
          <RTCCTable></RTCCTable>
        </div>
      </div>
      
    </div>
  )
}


export default App
