import React from 'react';
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';
import { calendarItems } from '../constants/';
const Calender = () => {
  return (
    <div className="Calender">
      <div className="header">
        <div className="title">
          <CalendarDate size="18" />
          <p>Calender</p>
        </div>
        <div className="btns">
          <span>
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="items">
        {calendarItems.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
