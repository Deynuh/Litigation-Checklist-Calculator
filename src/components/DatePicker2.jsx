import React, { useRef, useState } from 'react';
import EventEmitter2 from '../utils/EventEmitter2';
const DatePicker2 = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    
    EventEmitter2.emit('selectedDate',e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      <p>Selected Date: {date}</p>
    </div>
  );
};

export default DatePicker2;