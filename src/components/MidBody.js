import React, { useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import DateSet from "./DateSet";
import "./TableList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 * MidBody Component
 * @author AR097763
 */

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
  background: white;
  padding: 10px;
  margin-bottom: 2px;
  height: 130px;
  width: 100%;
  border: 1px solid black;
  ::placeholder {
    color: black;
  }
  resize: none;
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
  background-color: ${(props) => (props.enableRemove ? "#b71c1c" : "gray")};
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

/**
 *
 * @typedef PropType
 * @property {function} onSaveTestCase - function to save test case
 * @property {function} onSaveWeightage - function to save weightage
 * @property {function} onRemoveTestCases - function to remove test cases
 * @property {function} onDeleteTestCase - function to delete test case
 * @property {function} onDeleteWeightage - function to delete weightage
 * @property {function} onAddDateTime - function to add date time
 *
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

function MidBody(props) {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredOutput, setEnteredOutput] = useState("");
  const [addedTestCases, setaddedTestCases] = useState([]);
  const [weightage, setWeightage] = useState("");
  const addRef = useRef();
  const removeRef = useRef();
  const addButtonEnable =
    enteredInput.length > 0 && enteredOutput.length > 0 && weightage.length > 0;
  const removeButtonEnable = addedTestCases.length > 0;

  /**
   * @typedef {object} testCasesArrayElement
   * @property {string} input - input
   * @property {string} output - output
   * @property {string} weightage - weightage
   * @property {number} id - id
   */
  const testCasesArrayElement = {
    input: enteredInput,
    id: Math.random(),
    output: enteredOutput,
    points: weightage,
  };

  /**
   * @description - Passed to the App Component to save test case
   */
  const backendTestCasesArrayElement =
    testCasesArrayElement.input + ":" + testCasesArrayElement.output;

  /**
   * @description - Called when the user clicks on the add button
   */
  function addHandler() {
    setPopupAddType(!popupAddType);

    setaddedTestCases([...addedTestCases, testCasesArrayElement]);
    props.onSaveTestCase(backendTestCasesArrayElement);
    props.onSaveWeightage(weightage);
    setEnteredInput("");
    setEnteredOutput("");
    setWeightage("");
  }

  /**
   * @description - Called when the user clicks on the remove button
   */
  function removeHandler() {
    setPopupRemoveType(!popupRemoveType);
    setaddedTestCases([]);
    props.onRemoveTestCases();
  }

  /**
   *
   * @description - Called when the user clicks on the trash icon on table
   * @param {any} testId - id of the test case which will be deleted when clicked on trash icon
   */
  const handleDeleteClickHandler = (testId) => {
    const newAddedTestCases = [...addedTestCases];
    const index = addedTestCases.findIndex((test) => test.id === testId);
    const deletedTestCase = addedTestCases[index];

    newAddedTestCases.splice(index, 1);
    setaddedTestCases(newAddedTestCases);

    props.onDeleteWeightage(deletedTestCase.points);
    props.onDeleteTestCase(deletedTestCase);
  };

  /**
   * @description - Remove mousedown event listener from buttons
   * @param {any} stateReplied - state of the popup from Popup Component
   * @param {any} event - mousedown event listener
   */
 
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
            maxLength={500}
            type="text"
            placeholder="TestCases Input *"
            role="textbox"
            value={enteredInput}
            onChange={(event) => {
              setEnteredInput(event.target.value);
            }}
          ></ContentBoxes>
          <ContentBoxes
            maxLength={500}
            type="text"
            placeholder="Expected Output"
            role="textbox"
            value={enteredOutput}
            onChange={(event) => {
              setEnteredOutput(event.target.value);
            }}
          ></ContentBoxes>
          <ContentBoxes
            maxLength={500}
            type="text"
            placeholder="Weightage"
            role="textbox"
            value={weightage}
            onChange={(event) => {
              setWeightage(event.target.value);
            }}
          ></ContentBoxes>
        </WrapperBoxes>
      </ContainerBoxes>

      <ContainerButton>
        <WrapperButton>
          <ButtonAdd
            type="Add"
            ref={addRef}
            onClick={addHandler}
            disabled={!addButtonEnable}
            enableAdd={addButtonEnable}
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
            disabled={!removeButtonEnable}
            enableRemove={removeButtonEnable}
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
                    <tr role="row" data-testid="rows">
                      <td data-testid="input">{test.input}</td>
                      <td data-testid="output">{test.output}</td>
                      <td data-testid="points">{test.points}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleDeleteClickHandler(test.id)}
                          style={{
                            fontSize: "18px",
                            backgroundColor: "rgb(117, 201, 250)",
                            border: "none",
                            color: "white",
                            padding: "4px 4px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <FontAwesomeIcon type="icon" icon={faTrash} />
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
