import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState,useEffect} from 'react';
import EventEmitter2 from '../utils/EventEmitter2';
function createData(file, date) {
  return {file, date};
}




export default function BasicTable() {
  let[rDate,setrccDate] = useState("No Date Selected");
  let[lodDate,settpnDate] = useState("No Date Selected");
  var rows = [
    createData('Reply', rDate),
    createData('List of Documents', lodDate),

  ];
  
  useEffect(()=>{
    const setDates = (eventData)=>{
      var chosenDate = eventData;
      var d = parseInt(chosenDate.slice(-2)), m = parseInt(chosenDate.slice(5,7)), y = parseInt(chosenDate.slice(0,5));
      var x = [7,35];
      
      setrccDate(addDays(d,m,y,x[0]));
      settpnDate(addDays(d,m,y,x[1]));
      console.log("date was selected");
    }
    const listener = EventEmitter2.addListener('selectedDate',setDates);
    return ()=> {
      listener.remove();
    }
  })

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
      var value = d2 + "/" + m2 + "/" + y2;
      return value;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Pleadings</b></TableCell>
            <TableCell align="right"><b>Date (DD-MM-YYYY)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.file}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.file}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}