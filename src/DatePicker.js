import React, { useState } from 'react';
import { Select } from 'antd';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  eachDayOfInterval,
  getYear,
  getMonth,
} from 'date-fns';

import './DatePicker.css';

const DatePicker = () => {
  const { Option } = Select;
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const months = Array.from({ length: 12 }, (_, monthIndex) => ({
    value: monthIndex,
    label: format(new Date(0, monthIndex), 'MMMM'),
  }));

  const years = Array.from({ length: 10 }, (_, yearIndex) => {
    const year = getYear(selectedMonth) - 5 + yearIndex;
    return { value: year, label: year.toString() };
  });

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedMonth),
    end: addMonths(selectedMonth, 1),
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleMonthChange = (event) => {
    const newMonth = parseInt(event.target.value);
    setSelectedMonth((prevMonth) => new Date(getYear(prevMonth), newMonth));
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    setSelectedMonth((prevMonth) => new Date(newYear, getMonth(prevMonth)));
  };

  return (
    <div className="date-picker">
      <div className="header">
        <Select
          value={getMonth(selectedMonth)}
          onChange={handleMonthChange}
          className="month-dropdown"
        >
          {months.map((month) => (
            <Option key={month.value} value={month.value}>
              {month.label}
            </Option>
          ))}
        </Select>
        <Select
          value={getYear(selectedMonth)}
          onChange={handleYearChange}
          className="year-dropdown"
        >
          {years.map((year) => (
            <Option key={year.value} value={year.value}>
              {year.label}
            </Option>
          ))}
        </Select>


      </div>
      <div className="days">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-label">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => (
          <div key={day} className="day">
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
