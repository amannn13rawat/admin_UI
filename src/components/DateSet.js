import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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


function DateSet(props) {
  //selectStartDate, selectEndDate has date in format of strings
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectStartDate, setSelectStartDate] = useState("");
  const [selectEndDate, setSelectEndDate] = useState("");
 

  function startDateChangeHandler(date) {
    setSelectedStartDate(date);
    setSelectStartDate(String(moment(date).format('YYYY-MM-DD HH:mm')));
  }

  function endDateChangeHandler(date) {
    setSelectedEndDate(date);
    setSelectEndDate(String(moment(date).format('YYYY-MM-DD HH:mm')));
  }

  //Passing to midBody
  props.onSaveDateTime(selectStartDate,selectEndDate)
  // console.log(selectStartDate)
  // console.log(selectEndDate)
  // console.log(typeof(selectStartDate))
  return (
    <ContainerDateSet>
      <DatePicker

        selected={selectedStartDate}
        onChange={startDateChangeHandler}
        dateFormat="yyyy-MM-dd HH:mm"
        maxDate={new Date()}
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
        minDate={new Date()}
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
