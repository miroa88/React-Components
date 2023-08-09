//npm install date-fns
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval } from 'date-fns';
import './DatePicker.css'; // You can style the component using CSS

const DatePicker = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedMonth),
    end: addMonths(selectedMonth, 1),
  });

  const handlePrevMonth = () => {
    setSelectedMonth(subMonths(selectedMonth, 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth(addMonths(selectedMonth, 1));
  };

  return (
    <div className="date-picker">
      <div className="header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{format(selectedMonth, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="days">
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
