import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const Calendar = () => {
  const date = new Date();
  const [ym, setYm] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });

  return (
    <div id="calendar">
      <CalendarHeader ym={ym} setYm={setYm} />
      <CalendarBody ym={ym} />
    </div>
  );
};

export default Calendar;
