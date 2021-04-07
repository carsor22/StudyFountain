import React from 'react';

export const CalendarTop = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div id='top'>
      <div>{dateDisplay}</div>
      <div>
        <button onClick={onBack} className='CalBut'>
          Back
        </button>
        <button onClick={onNext} className='CalBut'>
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarTop;
