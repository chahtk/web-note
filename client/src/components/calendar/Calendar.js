import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: grey;
`;

const YearMonthStyle = styled.div`
  display: inline-block;
  width: 100px;
  text-align: center;
`;

const TableStyle = styled.table`
  border: 1px solid grey;
  border-collapse: collapse;
`;

const increaseMonth = (ym, setYm) => () => {
  const { year, month } = ym;
  if (month + 1 === 13) {
    setYm({
      ...ym,
      year: year + 1,
      month: 1,
    });
    return;
  }
  setYm({
    ...ym,
    month: month + 1,
  });
};

const decreaseMonth = (ym, setYm) => () => {
  const { year, month } = ym;
  if (month - 1 === 0) {
    setYm({
      ...ym,
      year: year - 1,
      month: 12,
    });
    return;
  }
  setYm({
    ...ym,
    month: month - 1,
  });
};

const Calendar = () => {
  const date = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const [ym, setYm] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });

  const getCalendarArray = () => {
    const firstDay = new Date(ym.year, ym.month, 1).getDay();
    const lastDate = new Date(ym.year, ym.month + 1, 0).getDate();
    const calendarArray = [];
    for (let i = 0; i < 7; i += 1) {
      if (i !== firstDay) {
        calendarArray.push(0); // prev month's day
      } else break;
    }
    for (let i = 1; i <= lastDate; i += 1) calendarArray.push(i);
    return calendarArray;
  };

  const renderCalendar = () => {
    const calendarArray = getCalendarArray();
    const rows = Math.floor((calendarArray.length - 1) / 7) + 1;
    const calendar = [];
    for (let i = 0; i < rows; i += 1) {
      const row = [];
      for (let j = 0; j < 7; j += 1) {
        const day = calendarArray[i * 7 + j];
        row.push(<td key={`cell${i}${j}`}>{day === 0 ? null : day}</td>);
      }
      calendar.push(<tr key={`asf${i}`}>{row}</tr>);
    }
    return calendar;
  };

  return (
    <div>
      <div id="calendar-header">
        <ButtonStyle onClick={decreaseMonth(ym, setYm)}>&lt;</ButtonStyle>
        <YearMonthStyle>
          {ym.year}년 {ym.month + 1}월
        </YearMonthStyle>
        <ButtonStyle onClick={increaseMonth(ym, setYm)}>&gt;</ButtonStyle>
      </div>
      <div id="calendar-body">
        <TableStyle>
          <thead>
            <tr>
              {days.map((day) => (
                <th key={`dayIs${day}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </TableStyle>
      </div>
    </div>
  );
};

export default Calendar;
