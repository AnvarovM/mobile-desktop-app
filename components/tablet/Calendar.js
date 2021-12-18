import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = () => {
  const selectionRanger = {};
  return (
    <div className="calendar py-10">
      <DateRangePicker
        ranges={[selectionRanger]}
        minDate={new Date()}
        rangeColors={["#aa3270"]}
        color={["#aa3270"]}
      />
    </div>
  );
};

export default Calendar;
