import { useRef, useState } from "react";
import styled from "styled-components";
import SubmitPopup from "./SubmitPopup";

/**
 * BottomBtn Component
 * 
 * @author AR097763
 */
const Container = styled.div`
  flex: 1;
  height: 43px;
  
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0px 30px;

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
  background-color: ${(props) => (props.buttonClear ? "#b71c1c" : "grey")};
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

/**
 * 
 * @typedef PropType
 * @property {object} backEndCall - Backend call object
 * @property {string} questionStartDate - Question start date
 * @property {string} questionEndDate - Question end date
 */

/**
 * 
 * @param {PropType} props 
 * @returns {JSX.Element}
 */

function BottomBtn({ backEndCall, questionStartDate, questionEndDate }) {
  const [showClickPopup, setShowClickPopup] = useState(false);
  const submitRef = useRef();

 /**
  * @description - function to remove mousedown event listener from submit button
  * @param {*} event - mousedown click event listener 
  */
  function closePopupHandler(event) {
    if (!submitRef.current.contains(event.target)) {
      setShowClickPopup(!showClickPopup);
    }
  }

  const questionStartEffectiveTime = questionStartDate;
  const questionEndEffectiveTime = questionEndDate;

  async function submitHandler() {
    if (backEndCall.defaultReward === 100) {
      setShowClickPopup(!showClickPopup);
      try {
        await fetch(
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
      } catch (error) {
        alert("Server is down , Failed to make API call");
      }
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
          disabled={
            !(
              backEndCall.testCases.length > 0 &&
              backEndCall.questionText !== "" &&
              questionEndEffectiveTime !== ""
            )
          }
          buttonEnable={
            backEndCall.testCases.length > 0 &&
            backEndCall.questionText !== "" &&
            questionEndEffectiveTime !== ""
          }
        >
          Submit
        </ButtonSubmit>
        {showClickPopup && (
          <SubmitPopup onClosedPopup={closePopupHandler}></SubmitPopup>
        )}
        <ButtonClear
          onClick={() => window.location.reload(false)}
          disabled={!(backEndCall.questionText !== "" || questionEndEffectiveTime !== "" )}
          buttonClear={backEndCall.questionText !== "" || questionEndEffectiveTime !== ""}
        >
          Clear
        </ButtonClear>
      </Wrapper>
    </Container>
  );
}

export default BottomBtn;
