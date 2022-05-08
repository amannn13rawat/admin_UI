import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContainerDateSet = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px 20px;
  height: 221px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function DateSet() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  function startDateChangeHandler(date) {
    setSelectedStartDate(date);
  }

  function endDateChangeHandler(date) {
    setSelectedEndDate(date);
  }

  return (
    <ContainerDateSet>
      <DatePicker
        selected={selectedStartDate}
        onChange={startDateChangeHandler}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        // isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText="Start Date"
      ></DatePicker>
      <DatePicker
        selected={selectedEndDate}
        onChange={endDateChangeHandler}
        dateFormat="yyyy-MM-dd"
        value={selectedEndDate}
        maxDate={new Date()}
        // maxDate={new Date()}
        // isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText="End Date"
      ></DatePicker>
    </ContainerDateSet>
  );
}

export default DateSet;
