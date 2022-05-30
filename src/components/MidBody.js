import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import DateSet from "./DateSet";
import "./TableList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
  background-color: ${(props) => (props.enableAdd ? "#00c853" : "gray")};
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

// let addedTestCases = [];
function MidBody(props) {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredOutput, setEnteredOutput] = useState("");
  const [addedTestCases, setaddedTestCases] = useState([]);
  const [weightage, setWeightage] = useState("");
  const [enableAdd, setEnableAdd] = useState(false);
  const [enableRemove, setEnableRemove] = useState(false);
  const addRef = useRef();
  const removeRef = useRef();

  const testCasesArrayElement = {
    input: enteredInput,
    id: Math.random(),
    output: enteredOutput,
    points: weightage,
  };

  const backendTestCasesArrayElement =
    testCasesArrayElement.input + ":" + testCasesArrayElement.output;

  function addHandler() {
    setEnableAdd(false);
    setPopupAddType(!popupAddType);
    // Adding the testCases to addedTestCases
    // addedTestCases.push(testCasesArrayElement);
    setaddedTestCases([...addedTestCases, testCasesArrayElement]);
    props.onSaveTestCase(backendTestCasesArrayElement);
    props.onSaveWeightage(weightage);
    setEnteredInput("");
    setEnteredOutput("");
    setWeightage("");
  }

  function removeHandler() {
    setPopupRemoveType(!popupRemoveType);
    setaddedTestCases([]);
    props.onRemoveTestCases();
  }
  const handleDeleteClickHandler = (testId) => {
    const newAddedTestCases = [...addedTestCases];
    const index = addedTestCases.findIndex((test) => test.id === testId);

    const deletedTestCase = addedTestCases[index];
    newAddedTestCases.splice(index, 1);

    setaddedTestCases(newAddedTestCases);
    props.onDeleteWeightage(deletedTestCase.points);
    props.onDeleteTestCase(deletedTestCase);
  };

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

  const enteredInputHandler = (event) => {
    setEnteredInput(event.target.value);
    if (
      event.target.value.trim().length > 0 &&
      enteredOutput.length > 0 &&
      weightage.length > 0
    ) {
      setEnableAdd(true);
      setEnableRemove(true);
    }
  };

  const enteredOutputHandler = (event) => {
    setEnteredOutput(event.target.value);
    if (
      event.target.value.trim().length > 0 &&
      enteredInput.length > 0 &&
      weightage.length > 0
    ) {
      setEnableAdd(true);
      setEnableRemove(true);
    }
  };

  const enteredWeightageHandler = (event) => {
    setWeightage(event.target.value);
    if (
      event.target.value.trim().length > 0 &&
      enteredInput.length > 0 &&
      enteredOutput.length > 0
    ) {
      setEnableAdd(true);
      setEnableRemove(true);
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
            onChange={enteredInputHandler}
          ></ContentBoxes>
          <ContentBoxes
            type="text"
            placeholder="Expected Output"
            role="textbox"
            value={enteredOutput}
            onChange={enteredOutputHandler}
          ></ContentBoxes>
          <ContentBoxes
            type="text"
            placeholder="Weightage"
            role="textbox"
            value={weightage}
            onChange={enteredWeightageHandler}
          ></ContentBoxes>
        </WrapperBoxes>
      </ContainerBoxes>

      <ContainerButton>
        <WrapperButton>
          <ButtonAdd
            type="Add"
            ref={addRef}
            onClick={addHandler}
            disabled={!enableAdd}
            enableAdd={enableAdd}
          >
            Add
          </ButtonAdd>

          {popupAddType && (
            <Popup
              color="#00C853"
              onCallPopup={handlePopupAdd}
              text="Test cases added successfulwly!"
            ></Popup>
          )}
          <ButtonRemove
            type="Remove"
            ref={removeRef}
            onClick={removeHandler}
            disabled={!enableRemove}
          >
            Remove All
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
            <form>
              <table role="table">
                <thead>
                  <tr role="row">
                    <th>Input</th>
                    <th>Output</th>
                    <th>Weightage</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {addedTestCases.map((test) => (
                    <tr role="row">
                      <td>{test.input}</td>
                      <td>{test.output}</td>
                      <td>{test.points}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleDeleteClickHandler(test.id)}
                          style={{
                            backgroundColor: "rgb(117, 201, 250)",
                            border: "none",
                            color: "white",
                            padding: "4px 4px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
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
