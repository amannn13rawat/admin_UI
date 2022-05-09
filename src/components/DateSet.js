import React, { useState } from "react";
import styled from "styled-components";
// import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
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

  // console.log(selectedStartDate)
  // console.log(selectedEndDate)
  //  console.log(typeof(String(selectedStartDate)))
  return (
    <ContainerDateSet>
      <DatePicker
        selected={selectedStartDate}
        onChange={startDateChangeHandler}
        dateFormat="yyyy-MM-dd HH:mm"
        minDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText="Start Date and Time"
        showTimeSelect
        showTimeInput
        timeFormat="HH:mm"
        timeIntervals={10}
        timeCaption="time"
      ></DatePicker>
      <DatePicker
        selected={selectedEndDate}
        onChange={endDateChangeHandler}
        dateFormat="yyyy-MM-dd HH:mm"
        value={selectedEndDate}
        maxDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText="End Date and Time"
        showTimeInput
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={10}
        timeCaption="time"
      ></DatePicker>
    </ContainerDateSet>
  );
}

export default DateSet;
