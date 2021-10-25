import React , { useState } from 'react';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


 
function App() {
 

  const yesterday = moment().subtract(1, 'day');
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };


 

  

  return (
    <div className="App">
 
      <p className="title">Select Date</p>
      <div id='demo'>
          <DatePicker
        timeFormat={false}
        isValidDate={disablePastDt}
        className='date'
        
      />
      </div>

      
 
    </div>
  );
}
 
export default App;