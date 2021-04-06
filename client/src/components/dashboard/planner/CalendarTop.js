import React from 'react';

export const CalendarTop = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div id='top'>
      <div>{dateDisplay}</div>
      <div>
        <button onClick={onBack} >
          Back
        </button>
        <button onClick={onNext} >
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarTop;
