/**
 * DateSet component
 * 
 * @author AR097763
 */
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
   font-family: 'Urbanist', sans-serif;
   font-size: small;
   font-weight: normal;
   
 `;
 /**
  * 
  * @typedef PropType
  * @property {function} onSaveDateTime - function to save start and end date
  */
 
 /**
  * 
  * @param {PropType} props 
  * @returns {JSX.Element}
  */
 function DateSet(props) {
 
   const [selectedStartDate, setSelectedStartDate] = useState(null);
   const [selectedEndDate, setSelectedEndDate] = useState(null);
   const [selectStartDate, setSelectStartDate] = useState("");
   const [selectEndDate, setSelectEndDate] = useState("");
 
   /**
    * 
    * @param {any} date - start date set from date picker
    */
   function startDateChangeHandler(date) {
     setSelectedStartDate(date);
     setSelectStartDate(String(moment(date).format("YYYY-MM-DD HH:mm")));
   }
 
   /**
    * 
    * @param {any} date - end Date set from date picker
    */
   function endDateChangeHandler(date) {
     setSelectedEndDate(date);
     setSelectEndDate(String(moment(date).format("YYYY-MM-DD HH:mm")));
   }
 
 /** 
  * @description - function to save start and end date and passes to midbody component 
  */
   useEffect(() => {
     const startDate = selectStartDate;
     const endDate = selectEndDate;
     if (startDate && endDate)
       props.onSaveDateTime(selectStartDate, selectEndDate);
   }, [selectStartDate, selectEndDate, props]);
 
  
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
 