import React from 'react';

export const Workshop = () => {
  return (
    <section class='dash'>
      <h1 class='large text-primary'>Mindfulness Worksheets</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Follow the instructions in these exercises
        and record your reflections in the journal.
      </p>
      <div className='ME'>
        <h2 className='topic'>Becoming Present</h2>
        <p className='Instruct'>
          Begin with closing your eyes and drawing attention to the breath. Let
          you mind take a break and rest in a sense of ease. Make sure you are
          comfortable and that there are no distractions. This topic focuses on
          becoming present to calm the mind and gain perspective on our thoughts
          and experiences
        </p>
        <ul className='quest'>
          <li>Where you able to feel relaxed? What did it feel like?</li>
          <li>Why do you think its important to spend time doing nothing?</li>
          <li>
            What positive or negative stories do you tell yourself about the
            past, future, and present?
          </li>
          <li>In moments of quiet, what do you learn about your mind?</li>
          <li>How do you think you could benefit by being more present?</li>
        </ul>
      </div>
      <div className='ME'>
        <h2 className='topic'>Time Management</h2>
        <p className='Instruct'>
          Begin with closing your eyes and drawing attention to the breath. Let
          you mind take a break and rest in a sense of ease. Make sure you are
          comfortable and that there are no distractions. This topic focuses on
          time management and reflects on what has been accomplised throughout
          the week.
        </p>
        <ul className='quest'>
          <li>
            Where there any conflicts in decisions you made about using your
            time?
          </li>
          <li>In what ways do you think you could use your time better?</li>
          <li>
            Did you learn anything signficant from making a certain decision?
          </li>
          <li>
            Where there unintended or intended consequences of the decisions?
            Did they match your expectations?
          </li>
        </ul>
      </div>
      <div className='ME'>
        <h2 className='topic'>Stengths and Weaknesses</h2>
        <p className='Instruct'>
          Begin with closing your eyes and drawing attention to the breath. Let
          you mind take a break and rest in a sense of ease. Make sure you are
          comfortable and that there are no distractions. This topic focuses on
          identifying strengths and weaknesses of self-study.
        </p>
        <ul className='quest'>
          <li>Do you feel that you have fulfilled your aims for this week?</li>
          <li>Where do you have the most room to grow?</li>
          <li>What resources and/or guidance can help you with this?</li>
          <li>What areas have you performed well in?</li>
        </ul>
      </div>
    </section>
  );
};

export default Workshop;
