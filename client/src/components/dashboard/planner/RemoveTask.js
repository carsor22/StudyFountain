import React, { Fragment } from 'react';

export const RemoveTask = ({ onDelete, eventText, onClose }) => {
  return (
    <Fragment>
      <div id='removeTask'>
        <h2>Remove Task</h2>
        <br></br>
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
    </Fragment>
  );
};

export default RemoveTask;
