import { useRef, useState } from "react";
import styled from "styled-components";
import SubmitPopup from "./SubmitPopup";

const Container = styled.div`
  flex: 1;
  height: 43px;
  /* background-color: blue; */
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0px 30px;
  /* margin-bottom: 20px; */
  /* margin-top: 16px; */
`;

const ButtonSubmit = styled.button`
  margin-right: 10px;
  background-color: #00c853;
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 3px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

const ButtonClear = styled.button`
  background-color: #b71c1c;
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

function BottomBtn({ backEnd, questionStartDate, questionEndDate }) {
  const [showClickPopup, setShowClickPopup] = useState(false);
  const submitRef = useRef();

  //to removee mouseClickdown event
  function closePopupHandler(event) {
    if (!submitRef.current.contains(event.target)) {
      setShowClickPopup(!showClickPopup);
    }
  }

  // if(backEnd.questionText === ''){
  //   setIsValid(false);
  // }
  // {!isValid && console.log("write questionText")}

  const questionStartEffectiveTime = questionStartDate;
  const questionEndEffectiveTime = questionEndDate;

  // console.log(backEnd);
  async function submitHandler() {
    if (backEnd.questionText && backEnd.testCases && questionEndEffectiveTime && backEnd.defaultReward===100) {
      setShowClickPopup(!showClickPopup);
      try {
        const response = await fetch(
          ` http://localhost:8084/codingQuestions/addQuestion/startDate/${questionStartEffectiveTime}/endDate/${questionEndEffectiveTime}`,
          {
            method: "POST",
            body: JSON.stringify(backEnd),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    } else if(backEnd.defaultReward !==100) {
      alert("Default Reward must be 100");
    } else {
      alert("Please Enter the Problem statement , Test Case and End Date Fields");
    }
  }

  return (
    <Container>
      <Wrapper>
        <ButtonSubmit ref={submitRef} onClick={submitHandler}>
          Submit
        </ButtonSubmit>
        {showClickPopup && (
          <SubmitPopup onClosedPopup={closePopupHandler}></SubmitPopup>
        )}
        <ButtonClear>Clear</ButtonClear>
      </Wrapper>
    </Container>
  );
}

export default BottomBtn;
