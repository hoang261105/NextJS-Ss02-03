"use client"
import React, { useState } from 'react'
import moment from 'moment'
import '../date.css'

export default function B12() {
    const [currentDate, setCurrentDate] = useState(moment());
  
    // Move to the next month
    const nextMonth = () => {
      setCurrentDate(currentDate.clone().add(1, "month"));
    };
  
    // Move to the previous month
    const prevMonth = () => {
      setCurrentDate(currentDate.clone().subtract(1, "month"));
    };
  
    // Function to handle date selection
    const selectDate = (day: any) => {
      setCurrentDate(currentDate.clone().date(day));
    };
  
    const renderCalendar = () => {
      const startOfMonth = currentDate.clone().startOf("month");
      const endOfMonth = currentDate.clone().endOf("month");
      const startDay = startOfMonth.day();
      const endDay = endOfMonth.date();
      
      const days: any[] = [];
  
      for (let i = 0; i < startDay; i++) {
        days.push(<td key={`empty-${i}`} className="empty-cell"></td>);
      }
  
      for (let day = 1; day <= endDay; day++) {
        days.push(
          <td
            key={day}
            className={day === currentDate.date() ? "selected" : ""}
            onClick={() => selectDate(day)}
          >
            {day}
          </td>
        );
      }
  
      const rows = [];
      for (let i = 0; i < days.length; i += 7) {
        rows.push(<tr key={i}>{days.slice(i, i + 7)}</tr>);
      }
  
      return rows;
    };
  
    return (
      <div className="calendar-container">
        <div className="header">
          <button onClick={prevMonth}>{"<"}</button>
          <span>{currentDate.format("MMMM YYYY")}</span>
          <button onClick={nextMonth}>{">"}</button>
        </div>
        <table>
          <thead>
            <tr>
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </table>
        <div className="actions">
          <button>Cancel</button>
          <button>Set date</button>
        </div>
      </div>
    );
}
