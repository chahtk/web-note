import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: grey;
`;

const YearMonthStyle = styled.div`
  display: inline-block;
  width: 100px;
  text-align: center;
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

const CalendarHeader = ({ ym, setYm }) => {
  /*
    const [ym, setYm] = useState({
      year: date.getFullYear(),
      month: date.getMonth(),
    });
  */
  return (
    <div id="calendar-header">
      <ButtonStyle onClick={decreaseMonth(ym, setYm)}>&lt;</ButtonStyle>
      <YearMonthStyle>
        {ym.year}년 {ym.month + 1}월
      </YearMonthStyle>
      <ButtonStyle onClick={increaseMonth(ym, setYm)}>&gt;</ButtonStyle>
    </div>
  );
};

export default CalendarHeader;
