import React from 'react';
import ReactDOM from 'react-dom';

const EntryList = ({
  entries,
  onAddEntry,
  onDeleteEntry,
  activeEntry,
  setActiveEntry,
}) => {
  const sortedEntries = entries.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className='Jcont-sidebar'>
      <div className='Jcont-sidebar-header'>
        <h1>Entries</h1>
        <button onClick={onAddEntry}>Add</button>
      </div>
      <div className='Jcont-sidebar-entries'>
        {sortedEntries.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`Jcont-sidebar-entry ${id === activeEntry && 'active'}`}
            onClick={() => setActiveEntry(id)}
          >
            <div className='sidebar-entry-title'>
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteEntry(id)}>Remove</button>
            </div>

            <p>{body && body.substr(0, 100) + '...'}</p>
            <small className='entry-meta'>
              Last Modified{' '}
              {new Date(lastModified).toLocaleDateString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryList;
