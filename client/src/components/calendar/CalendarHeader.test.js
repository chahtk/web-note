import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

describe('Calendar Header Test', () => {
  const getYearMonthElement = (calendar) =>
    calendar.getByText(/\d{4}년 \d{1,2}월/i);

  const getYearMonth = (yearMonth) => {
    const { textContent } = yearMonth;
    const [, month] = textContent.split(' ');
    return +month.slice(0, -1);
  };

  let date;
  let calendar;
  let yearMonth;
  let thisMonth;

  const init = () => {
    date = new Date();
    calendar = render(<Calendar />);
    yearMonth = getYearMonthElement(calendar);
    thisMonth = date.getMonth() + 1;
  };

  beforeEach(() => init());

  test('Default Month', () => {
    const month = getYearMonth(yearMonth);
    expect(month).toEqual(thisMonth);
  });

  test('Add Month', () => {
    const plusButton = calendar.container.querySelector('.right-arrow');
    fireEvent.click(plusButton);
    const month = getYearMonth(yearMonth);
    expect(month).toEqual(thisMonth === 12 ? 1 : thisMonth + 1);
  });

  test('Minus Month', () => {
    const minusButton = calendar.container.querySelector('.left-arrow');
    fireEvent.click(minusButton);
    const month = getYearMonth(yearMonth);
    expect(month).toEqual(thisMonth === 1 ? 12 : thisMonth - 1);
  });
});
