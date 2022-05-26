import React, { useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import DateSet from "./DateSet";
import "./TableList.css";

//Midbody css
const ContainerMid = styled.div`
  width: 100%;
  display: flex;
  height: 490px;
`;

//BOXES CSS
const ContainerBoxes = styled.div`
  flex: 5;
`;

const WrapperBoxes = styled.div`
  padding-top: 15px;
  padding-left: 30px;
  padding-right: 50px;
`;

const ContentBoxes = styled.textarea`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px;
  margin-bottom: 2px;
  height: 130px;
  width: 100%;
  border: none;
`;

//BUTTON CSS
const ContainerButton = styled.div`
  flex: 1;
  position: relative;
`;

const WrapperButton = styled.div`
  padding: 5px 5px;
`;

const ButtonAdd = styled.button`
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #00c853;
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;
const ButtonRemove = styled.button`
  margin: 0;
  position: absolute;
  top: 48%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #b71c1c;
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

//BOX2 CSS
const ContainerTableBox = styled.div`
  flex: 5;
`;

const WrapperTableBox = styled.div`
  padding-top: 15px;
  padding-left: 30px;
  padding-right: 70px;
`;

const ContentTableBox = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px 20px;
  height: 390px;
  width: 100%;
  border: none;
  overflow-y: scroll;
  margin-bottom: 5px;
`;

const addedTestCases = [];
function MidBody(props) {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredOutput, setEnteredOutput] = useState("");
  const addRef = useRef();
  const [weightage, setWeightage] = useState("");
  const removeRef = useRef();

  const testCasesArrayElement = {
    input: enteredInput,
    id: Math.random().toString(),
    output: enteredOutput,
    points: weightage,
  };

  const backendTestCasesArrayElement =
    testCasesArrayElement.input + ":" + testCasesArrayElement.output;

  function addHandler() {
    setPopupAddType(!popupAddType);
    // Adding the testCases to addedTestCases
    addedTestCases.push(testCasesArrayElement);
    props.onSaveTestCase(backendTestCasesArrayElement);
    props.onSaveWeightage(weightage);
    setEnteredInput("");
    setEnteredOutput("");
    setWeightage("");
  }

  function removeHandler() {
    setPopupRemoveType(!popupRemoveType);
    //Deleting the testCases from addedTestCases
    const deletedTestCase = addedTestCases.pop();
    // console.log(deletedTestCase.points);
    props.onDeleteWeightage(deletedTestCase.points);
    props.onDeleteTestCase(deletedTestCase.id,deletedTestCase)
    // console.log(deletedTestCase.id)
  }

  //Removing mousedown Event fom buttons.
  const handlePopupAdd = (stateReplied, event) => {
    if (!addRef.current.contains(event.target)) {
      setPopupAddType(stateReplied);
    }
  };
  const handlePopupRemove = (stateReplied, event) => {
    if (!removeRef.current.contains(event.target)) {
      setPopupRemoveType(stateReplied);
    }
  };

  return (
    <ContainerMid>
      <ContainerBoxes>
        <WrapperBoxes>
          <ContentBoxes
            aria-label="Input"
            type="text"
            placeholder="TestCases Input *"
            role="textbox"
            value={enteredInput}
            onChange={(event) => setEnteredInput(event.target.value)}
          ></ContentBoxes>
          <ContentBoxes
            type="text"
            placeholder="Expected Output"
            role="textbox"
            value={enteredOutput}
            onChange={(event) => setEnteredOutput(event.target.value)}
          ></ContentBoxes>
          <ContentBoxes
            type="text"
            placeholder="Weightage"
            role="textbox"
            value={weightage}
            onChange={(event) => setWeightage(event.target.value)}
          ></ContentBoxes>
        </WrapperBoxes>
      </ContainerBoxes>

      <ContainerButton>
        <WrapperButton>
          <ButtonAdd type="Add" ref={addRef} onClick={addHandler}>
            Add
          </ButtonAdd>

          {popupAddType && (
            <Popup
              color="#00C853"
              onCallPopup={handlePopupAdd}
              text="Test cases added successfulwly!"
            ></Popup>
          )}
          <ButtonRemove type="Remove" ref={removeRef} onClick={removeHandler}>
            Remove
          </ButtonRemove>
          {popupRemoveType && (
            <Popup
              color="#B71C1C"
              onCallPopup={handlePopupRemove}
              text="Test cases removed successfully!"
            ></Popup>
          )}
        </WrapperButton>
      </ContainerButton>

      <ContainerTableBox>
        <WrapperTableBox>
          <ContentTableBox>
            <table role="table">
              <thead>
                <tr role="row">
                  <th>Input</th>
                  <th>Output</th>
                  <th>Weightage</th>
                </tr>
              </thead>
              <tbody>
                {addedTestCases.map((test) => (
                  <tr role="row">
                    <td>{test.input}</td>
                    <td>{test.output}</td>
                    <td>{test.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContentTableBox>
          <DateSet
            onSaveDateTime={(selectStartDate, selectEndDate) => {
              props.onAddDateTime(selectStartDate, selectEndDate);
            }}
          ></DateSet>
        </WrapperTableBox>
      </ContainerTableBox>
    </ContainerMid>
  );
}

export default MidBody;
