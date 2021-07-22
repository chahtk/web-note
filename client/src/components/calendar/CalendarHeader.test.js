import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

describe('Calendar Buttons', () => {
  
  const getYearMonthElement = (calendar) => 
    calendar.getByText(/\d{4}년 \d{1,2}월/i);

  const getYearMonth = (yearMonth) => {
    const { textContent } = yearMonth;
    const [year, month] = textContent.split(' ')
    return [+year.slice(0, -1), +month.slice(0, -1)];
  };

  let date, calendar, yearMonth, thisMonth;

  const init = () => {
    date = new Date();
    calendar = render(<Calendar />);
    yearMonth = getYearMonthElement(calendar);
    thisMonth = date.getMonth() + 1;
  }

  beforeEach(() => init())

  test('Default Month', () => {
    const [year, month] = getYearMonth(yearMonth);
    expect(month).toEqual(thisMonth);
  })

  test('Add Month', () => {
    const plusButton = calendar.getByText('>');
    fireEvent.click(plusButton);
    const [year, month] = getYearMonth(yearMonth);
    expect(month).toEqual(thisMonth + 1);
  })

  test('Minus Month', () => {
    const minusButton = calendar.getByText('<');
    fireEvent.click(minusButton);
    const [year, month] = getYearMonth(yearMonth);
    expect(month).toEqual(thisMonth - 1);
  })
});