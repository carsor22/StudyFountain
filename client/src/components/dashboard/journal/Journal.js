import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import UserInput from './UserInput';
import EntryList from './EntryList';

function Journal() {
  const [entries, setEntries] = useState(
    localStorage.entries ? JSON.parse(localStorage.entries) : []
  );
  const [activeEntry, setActiveEntry] = useState(false);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const onAddEntry = () => {
    const newEntry = {
      id: uuid(),
      title: 'Untitled Entry',
      body: '',
      lastModified: Date.now(),
    };

    setEntries([newEntry, ...entries]);
    setActiveEntry(newEntry.id);
  };

  const onDeleteEntry = (entryId) => {
    setEntries(entries.filter(({ id }) => id !== entryId));
  };

  const onUpdateEntry = (updatedEntry) => {
    const updatedEntriesArr = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });

    setEntries(updatedEntriesArr);
  };

  const getActiveEntry = () => {
    return entries.find(({ id }) => id === activeEntry);
  };

  return (
    <Fragment>
      <h1 class='large text-primary'>Journal</h1>
      <div className='Jcont'>
        <EntryList
          entries={entries}
          onAddEntry={onAddEntry}
          onDeleteEntry={onDeleteEntry}
          activeEntry={activeEntry}
          setActiveEntry={setActiveEntry}
        />
        <UserInput
          activeEntry={getActiveEntry()}
          onUpdateEntry={onUpdateEntry}
        />
      </div>
    </Fragment>
  );
}

export default Journal;
