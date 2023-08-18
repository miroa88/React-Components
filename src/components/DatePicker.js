import React, { useState, useEffect } from 'react';
import { Select, Button  } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import {
  format,
  subMonths,
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
  getYear,
  getMonth,
  isSameDay,
} from 'date-fns';

import './DatePicker.css';

import { useDispatch } from 'react-redux';
import { setAppointment } from '../actions/appointment/AppointmentActions';

import { useSelector } from 'react-redux';

const DatePicker = () => {
  const appointments = useSelector(state => state.appointment);
  const { Option } = Select;
  const [selectedMonth, setSelectedMonth] = useState(new Date()); 

  const dispatch = useDispatch();

  useEffect(() => {
    const updateAppointment = () => {
      const appointment = {
        date: selectedMonth.getTime(),
      };

      dispatch(setAppointment(appointment));
    };

    updateAppointment();
  }, [selectedMonth]); 


  const months = Array.from({ length: 12 }, (_, monthIndex) => ({
    value: monthIndex,
    label: format(new Date(0, monthIndex), 'MMMM').slice(0, 3).toUpperCase(),
  }));

  const years = Array.from({ length: 10 }, (_, yearIndex) => {
    const year = getYear(new Date()) - 1 + yearIndex;
    return { value: year, label: year.toString() };
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

  const monthLeftClickHandler = () => {
    const previousDate = new Date(selectedMonth)
    handleMonthChange(selectedMonth.getMonth() - 1);

  }

  const monthRightClickHandler = () => {
    handleMonthChange(selectedMonth.getMonth() + 1);
  }

  const yearLeftClickHandler = () => {
    handleYearChange(selectedMonth.getFullYear() - 1);
  }

  const yearRightClickHandler = () => {
    handleYearChange(selectedMonth.getFullYear() + 1);
  }

  return (
    <div className="date-picker">
      <h2>{(new Date(appointments.date)).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
      <div className="header">
        <Button onClick={monthLeftClickHandler} size="small" shape="circle" icon={<ArrowLeftOutlined />} />
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
        <Button onClick={monthRightClickHandler}  size="small" shape="circle" icon={<ArrowRightOutlined />} />
        <Button onClick={yearLeftClickHandler} size="small" shape="circle" icon={<ArrowLeftOutlined />} />
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
        <Button onClick={yearRightClickHandler} size="small" shape="circle" icon={<ArrowRightOutlined />} />
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
