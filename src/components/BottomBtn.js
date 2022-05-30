import { grey } from "@mui/material/colors";
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
  background-color: ${(props) => (props.buttonEnable ? "#00c853" : "grey")};
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

function BottomBtn({ backEndCall, questionStartDate, questionEndDate }) {
  const [showClickPopup, setShowClickPopup] = useState(false);
  const submitRef = useRef();

  //to removee mouseClickdown event
  function closePopupHandler(event) {
    if (!submitRef.current.contains(event.target)) {
      setShowClickPopup(!showClickPopup);
    }
  }

  
  const questionStartEffectiveTime = questionStartDate;
  const questionEndEffectiveTime = questionEndDate;
console.log(questionStartEffectiveTime);
  async function submitHandler() {
    if (
      backEndCall.questionText &&
      backEndCall.testCases &&
      questionEndEffectiveTime &&
      backEndCall.defaultReward === 100
    ) {
      setShowClickPopup(!showClickPopup);
      try {
        const response = await fetch(
          ` http://localhost:8084/codingQuestions/addQuestion/startDate/${questionStartEffectiveTime}/endDate/${questionEndEffectiveTime}`,
          {
            method: "POST",
            body: JSON.stringify(backEndCall),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        // const data = await response.json();
        // console.log(data);
      } catch (error) {
        alert(error.message);
      }
    } else if (
      backEndCall.questionText === "" ||
      backEndCall.testCases === null ||
      questionEndEffectiveTime === ""
    ) {
      alert(
        "Please Enter the Problem statement , Test Case and End Date Fields"
      );
    } else {
      alert("Total Weightage should be equal to 100");
    }
  }

  return (
    <Container>
      <Wrapper>
        <ButtonSubmit
          ref={submitRef}
          onClick={submitHandler}
          disabled={!(backEndCall.testCases.length>0&&backEndCall.questionText!==""&&questionEndEffectiveTime!=="")}
          buttonEnable={backEndCall.testCases.length>0&&backEndCall.questionText!==""&&questionEndEffectiveTime!==""}
        >
          Submit
        </ButtonSubmit>
        {showClickPopup && (
          <SubmitPopup onClosedPopup={closePopupHandler}></SubmitPopup>
        )}
        <ButtonClear onClick={() => window.location.reload(false)}>
          Clear
        </ButtonClear>
      </Wrapper>
    </Container>
  );
}

export default BottomBtn;
