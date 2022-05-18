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
  /* background-color: orange; */
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
const ContainerBox2 = styled.div`
  flex: 5;
  /* background-color: yellow; */
`;

const WrapperBox2 = styled.div`
  padding-top: 15px;
  padding-left: 30px;
  padding-right: 70px;
`;

const ContentBox2 = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px 20px;
  height: 390px;
  width: 100%;
  border: none;
  overflow-y: scroll;
  margin-bottom: 5px;
`;

// const dummyTestCases = [
//   { input: "Input", output: "Output", id: "g1", points: "Weightage" },
// ];
const addedTestCases = [];
let weightage="";
function MidBody(props) {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredOutput, setEnteredOutput] = useState("");
  // const [enteredWeightage, setEnteredWeightage] = useState("");
  // const [addedTestCases, setAddedTestCases] = useState([]);

  const addRef = useRef();
  const removeRef = useRef();

  function weightageHandler(event) {
    // setEnteredWeightage(event.target.value)
    weightage = event.target.value;
    // props.onSaveReward(enteredWeightage);
    props.onSaveReward(weightage);
  }
  // console.log(typeof(enteredWeightage))
  // console.log(typeof(points))
  const testCasesArray = {
    input: enteredInput,
    id: Math.random().toString(),
    output: enteredOutput,
    // points: Math.floor(enteredWeightage),
    points: weightage,
  };

  function addHandler() {
    setPopupAddType(!popupAddType);
    addedTestCases.push(testCasesArray);
    props.onAddTestCases(addedTestCases);
    setEnteredInput("");
    setEnteredOutput("");
    weightage = "";
  }

  function removeHandler() {
    setPopupRemoveType(!popupRemoveType);

    //Deleting the testCases from addedTestCases
    addedTestCases.pop();
  }

  //Removing mousedown EVent
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

  //Pass select and End Date
  // function saveDateTimeHandler(selectStartDate, selectEndDate) {
  //   // console.log(selectStartDate)
  //   // console.log(selectEndDate)
  //   props.onAddDateTime(selectStartDate, selectEndDate);
  // }

  return (
    <ContainerMid>
      <ContainerBoxes>
        <WrapperBoxes>
          <ContentBoxes
            input="text"
            placeholder="TestCases Input *"
            role="textbox"
            value={enteredInput}
            onChange={(event) => setEnteredInput(event.target.value)}
          ></ContentBoxes>
          <ContentBoxes
            input="text"
            placeholder="Expected Output"
            role="textbox"
            value={enteredOutput}
            onChange={(event) => setEnteredOutput(event.target.value)}
          ></ContentBoxes>
          <ContentBoxes
            input="text"
            placeholder="Weightage"
            role="textbox"
            value={weightage}
            onChange={weightageHandler}
          ></ContentBoxes>
        </WrapperBoxes>
      </ContainerBoxes>

      <ContainerButton>
        <WrapperButton>
          <ButtonAdd ref={addRef} onClick={addHandler}>
            Add
          </ButtonAdd>

          {popupAddType && (
            <Popup
              color="#00C853"
              onCallPopup={handlePopupAdd}
              text="Test cases added successfully!"
            ></Popup>
          )}
          <ButtonRemove ref={removeRef} onClick={removeHandler}>
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

      <ContainerBox2>
        <WrapperBox2>
          <ContentBox2>
            <table>
              <thead>
                <tr>
                  <th>Input</th>
                  <th>Output</th>
                  <th>Weightage</th>
                </tr>
              </thead>
              <tbody>
                {addedTestCases.map((test) => (
                  <tr>
                    <td>{test.input}</td>
                    <td>{test.output}</td>
                    <td>{test.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContentBox2>
          <DateSet
            onSaveDateTime={(selectStartDate, selectEndDate) => {
              props.onAddDateTime(selectStartDate, selectEndDate);
            }}
          ></DateSet>
        </WrapperBox2>
      </ContainerBox2>
    </ContainerMid>
  );
}

export default MidBody;
