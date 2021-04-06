import React, { useState } from 'react';

export const NewTask = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  return (
    <>
      <div id='addTask'>
        <h2>Add task to calendar</h2>
        <input
          className={error ? 'error' : ''}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Task Title'
        />
        <br>
        </br>
        <br>
        </br>
        <button
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }}
          id='addButton'
        >
          Add
        </button>
        <button onClick={onClose} id='cancelButton'>
          Cancel
        </button>
      </div>
      <div></div>
    </>
  );
};

export default NewTask;
