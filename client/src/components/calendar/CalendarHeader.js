import React from 'react';
import styled from 'styled-components';

const CalendarHeaderStyle = styled.div`
  text-align: center;
  margin: 15px 0px 25px;
`;

const ButtonStyle = styled.div`
  display: inline-block;
  cursor: pointer;

  width: 0px;
  height: 0px;
  border: 7px solid white;

  &.left-arrow {
    border-left: 0;
    border-right: 7px solid black;
  }
  &.right-arrow {
    border-right: 0;
    border-left: 7px solid black;
  }
`;

const YearMonthStyle = styled.div`
  display: inline-block;
  width: 120px;
  text-align: center;
  font-weight: bold;
  font-size: large;
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
    <CalendarHeaderStyle id="calendar-header">
      <ButtonStyle className="left-arrow" onClick={decreaseMonth(ym, setYm)} />
      <YearMonthStyle>
        {ym.year}년 {ym.month + 1}월
      </YearMonthStyle>
      <ButtonStyle className="right-arrow" onClick={increaseMonth(ym, setYm)} />
    </CalendarHeaderStyle>
  );
};

export default CalendarHeader;
