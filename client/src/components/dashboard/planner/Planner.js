import React, { useState, useEffect } from 'react';
import { CalendarTop } from './CalendarTop';
import { Day } from './Day';
import { NewTask } from './NewTask';
import { RemoveTask } from './RemoveTask';
import { useDate } from './useDate';

export const Planner = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : []
  );

  const matchTaskToDate = (date) => tasks.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const { days, dateDisplay } = useDate(tasks, nav);

  return (
    <>
      <div className='bod'>
        <div id='cont'>
          <CalendarTop
            dateDisplay={dateDisplay}
            onNext={() => setNav(nav + 1)}
            onBack={() => setNav(nav - 1)}
          />
          <div id='weekdays'>
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
          <div id='calendar'>
            {days.map((d, index) => (
              <Day
                key={index}
                day={d}
                onClick={() => {
                  if (d.value !== 'padding') {
                    setClicked(d.date);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {clicked && !matchTaskToDate(clicked) && (
        <NewTask
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setTasks([...tasks, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}
      {clicked && matchTaskToDate(clicked) && (
        <RemoveTask
          eventText={matchTaskToDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setTasks(tasks.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
};

export default Planner;
