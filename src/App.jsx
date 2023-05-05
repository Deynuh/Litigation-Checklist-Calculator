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
    </div>
  )
}

var m2, d2;

function isLeap(y)
{
    if (y % 100 != 0 &&
        y % 4 == 0 ||
        y % 400 == 0)
        return true;
 
    return false;
}

function offsetDays(d , m , y)
{
    var offset = d;
 
    if (m - 1 == 11)
        offset += 335;
    if (m - 1 == 10)
        offset += 304;
    if (m - 1 == 9)
        offset += 273;
    if (m - 1 == 8)
        offset += 243;
    if (m - 1 == 7)
        offset += 212;
    if (m - 1 == 6)
        offset += 181;
    if (m - 1 == 5)
        offset += 151;
    if (m - 1 == 4)
        offset += 120;
    if (m - 1 == 3)
        offset += 90;
    if (m - 1 == 2)
        offset += 59;
    if (m - 1 == 1)
        offset += 31;
 
    if (isLeap(y) && m > 2)
        offset += 1;
 
    return offset;
}
 

function revoffsetDays(offset, y)
{
    var month = [ 0, 31, 28, 31, 30, 31, 30,
                  31, 31, 30, 31, 30, 31 ];
 
    if (isLeap(y))
        month[2] = 29;
 
    var i;
    for(i = 1; i <= 12; i++)
    {
        if (offset <= month[i])
            break;
             
        offset = offset - month[i];
    }
    d2 = offset;
    m2 = i;
}
 

function addDays(d1 , m1 , y1 , x)
{
    var offset1 = offsetDays(d1, m1, y1);
    var remDays = isLeap(y1) ? (366 - offset1) :
                               (365 - offset1);
 
 
    var y2, offset2 = 0;
    if (x <= remDays)
    {
        y2 = y1;
        offset2 = offset1 + x;
    }
    else
    {

        x -= remDays;
        y2 = y1 + 1;
        var y2days = isLeap(y2) ? 366 : 365;
         
        while (x >= y2days)
        {
            x -= y2days;
            y2++;
            y2days = isLeap(y2) ? 366 : 365;
        }
        offset2 = x;
    }
     
    revoffsetDays(offset2, y2);
    document.write("d2 = " + d2 +
                   ", m2 = " + m2 +
                   ", y2 = " + y2);
}
export default App
