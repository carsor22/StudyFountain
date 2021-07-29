import React from 'react';

const UserInput = ({ activeEntry, onUpdateEntry }) => {
  const onEditField = (field, value) => {
    onUpdateEntry({
      ...activeEntry,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeEntry)
    return <div className='no-active-entry'>No Active Entry</div>;

  return (
    <div className='Jcont-UserInput'>
      <div className='Jcont-UserInput-entry-edit'>
        <input
          type='text'
          id='title'
          placeholder='Entry Title'
          value={activeEntry.title}
          onChange={(e) => onEditField('title', e.target.value)}
          autoFocus
        />
        <textarea
          id='body'
          placeholder='Write an entry here'
          value={activeEntry.body}
          onChange={(e) => onEditField('body', e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserInput;
