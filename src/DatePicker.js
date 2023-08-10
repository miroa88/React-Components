import React, { useState } from 'react';
import { Select } from 'antd';
import {
  format,
  addMonths,
  subMonths,
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
  getYear,
  getMonth,
  isSameDay 
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
    const year = getYear(selectedMonth) - 1 + yearIndex;
    return { value: year, label: year.toString() };
  });

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedMonth),
    end: addMonths(selectedMonth, 1),
  });

  const getDaysInMonth = (selectedDate) => {
    const startOfSelectedMonth = startOfMonth(selectedDate);
    const endOfSelectedMonth = endOfMonth(selectedDate);
    const daysInMonth = eachDayOfInterval({ start: startOfSelectedMonth, end: endOfSelectedMonth });
    return [...daysInMonth]; 
  }

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];

  const handleMonthChange = (value) => {
    const newMonth = parseInt(value);
    setSelectedMonth((prevMonth) => new Date(getYear(prevMonth), newMonth));
  };

  const handleYearChange = (value) => {
    const newYear = parseInt(value);
    setSelectedMonth((prevMonth) => new Date(newYear, getMonth(prevMonth)));
  };

  const handleStartOfMonth = (selectedDate) => {
    const startOfSelectedMonth = startOfMonth(selectedDate);
    let numberOfDaysFormLastMonth =  startOfSelectedMonth.getDay();
    const daysInLastMonth = getDaysInMonth(subMonths(selectedDate, 1))
    numberOfDaysFormLastMonth -= 1
    if (numberOfDaysFormLastMonth === -1) {
      return daysInLastMonth.slice(-6)
    } else if(numberOfDaysFormLastMonth === 0) {
      return []
    } else { 
      return daysInLastMonth.slice(-numberOfDaysFormLastMonth)
    } 
  }

  const handleDayChange = (clickedDay) => {
    
    const daysToAdd = clickedDay.target.textContent - selectedMonth.getDate();
    let newDate = new Date(selectedMonth);
    newDate.setDate(selectedMonth.getDate() + daysToAdd);
    setSelectedMonth(newDate)
  }

  return (
    <div className="date-picker">
      <h2>{selectedMonth.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
      <div className="header">
        <Select
          defaultValue={getMonth(selectedMonth)}
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
          defaultValue={getYear(selectedMonth)}
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
        {handleStartOfMonth(selectedMonth).map((day) => (
          <div key={day} className= 'hide day' >
            {format(day, 'd')}
          </div>
        ))}
        {getDaysInMonth(selectedMonth).map((day) => (
          <div key={day} onClick={handleDayChange} className={`day ${isSameDay(selectedMonth, day) ? 'selected day' : 'day'}`} >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
