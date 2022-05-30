import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const ContainerDateSet = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 5px 20px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label=styled.label`
  font-family: "Times New Roman", Times, serif;
  font-size: small;
  font-weight: normal;
  
`;

function DateSet(props) {
  //selectStartDate, selectEndDate has date in format of strings
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectStartDate, setSelectStartDate] = useState("");
  const [selectEndDate, setSelectEndDate] = useState("");

  function startDateChangeHandler(date) {
    setSelectedStartDate(date);
    setSelectStartDate(String(moment(date).format("YYYY-MM-DD HH:mm")));
  }

  function endDateChangeHandler(date) {
    setSelectedEndDate(date);
    setSelectEndDate(String(moment(date).format("YYYY-MM-DD HH:mm")));
  }

  //Passing to midBody
  useEffect(() => {
    const startDate = selectStartDate;
    const endDate = selectEndDate;
    if (startDate && endDate)
      props.onSaveDateTime(selectStartDate, selectEndDate);
  }, [selectStartDate, selectEndDate]);

  return (
    <ContainerDateSet>
      <Label > Start Date and Time 
      <DatePicker
        selected={selectedStartDate}
        onChange={startDateChangeHandler}
        dateFormat="yyyy-MM-dd HH:mm"
        value={selectedStartDate}
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
      </Label>
      <Label> End Date and Time *
      <DatePicker
        selected={selectedEndDate}
        onChange={endDateChangeHandler}
        dateFormat="yyyy-MM-dd HH:mm"
        value={selectedEndDate}
        minDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText="End Date and Time *"
        showTimeInput
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={10}
        timeCaption="time"
      ></DatePicker>
      </Label>
    </ContainerDateSet>
  );
}

export default DateSet;
