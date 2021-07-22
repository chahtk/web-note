import React from 'react';
import styled from 'styled-components';

const TableStyle = styled.table`
  border: 1px solid grey;
  border-collapse: collapse;
`;

const getCalendarArray = (ym) => {
  // calendarArray: 달력을 일차원 배열로 표현. 일요일부터 시작하며 1일 전에는 0으로 채운다.
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

const renderCalendar = (ym) => {
  const calendarArray = getCalendarArray(ym);
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

const CalendarBody = ({ ym }) => {
  /*
    const [ym, setYm] = useState({
      year: date.getFullYear(),
      month: date.getMonth(),
    });
  */
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div id="calendar-body">
      <TableStyle>
        <thead>
          <tr>
            {days.map((day) => (
              <th key={`dayIs${day}`}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCalendar(ym)}</tbody>
      </TableStyle>
    </div>
  );
};

export default CalendarBody;
