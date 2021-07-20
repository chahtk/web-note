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

const Calendar = () => {
  const date = new Date();
  const [ym, setYm] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });

  const increaseMonth = () => {
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

  const decreaseMonth = () => {
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

  return (
    <div>
      <ButtonStyle onClick={decreaseMonth}>&lt;</ButtonStyle>
      <YearMonthStyle>
        {ym.year}년 {ym.month}월
      </YearMonthStyle>
      <ButtonStyle onClick={increaseMonth}>&gt;</ButtonStyle>
    </div>
  );
};

export default Calendar;
