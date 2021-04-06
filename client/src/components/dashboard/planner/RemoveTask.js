import React from 'react';

export const RemoveTask = ({ onDelete, eventText, onClose }) => {
  return (
    <>
      <div id='removeTask'>
        <h2>Remove Task</h2>

        <p>{eventText}</p>
        <br></br>
        <button onClick={onDelete} id='removeButton'>
          Remove
        </button>
        <button onClick={onClose} id='cancelButton'>
          Cancel
        </button>
      </div>

      <div></div>
    </>
  );
};

export default RemoveTask;
