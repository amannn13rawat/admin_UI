import React, { useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import TestCasesList from "./TestCasesList";

//Midbody css
const ContainerMid = styled.div`
  
  width: 100%;
  display: flex;
`;

//BOXES CSS
const ContainerBoxes = styled.div`
  flex: 5;
`;

const WrapperBoxes = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 50px;
`;

const ContentBoxes = styled.textarea`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px;
  margin-bottom: 20px;
  height: 442px;
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
`;

const WrapperBox2 = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 70px;
`;

const ContentBox2 = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px 20px;
  height: 442px;
  width: 100%;
  border: none;
`;

const dummyTestCases = [
  { testCase: "TestCases", id: "g1", points: "Weightage" },
];
function MidBody() {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [enteredTestcases, setEnteredTestcases] = useState("");
  const [addedTestCases, setAddedTestCases] = useState(dummyTestCases);

  const addRef = useRef();
  const removeRef = useRef();

  const testCasesArray = {
    testCase: enteredTestcases.split(",")[0],
    id: Math.random().toString(),
    points: enteredTestcases.split(",")[1],
  };

  function addHandler() {
    setPopupAddType(!popupAddType);

    //Putting aaray in addedTestCases
    setAddedTestCases((prevTest) => {
      return [...prevTest, testCasesArray];
    });
    setEnteredTestcases("");
  }


  function removeHandler() {
    setPopupRemoveType(!popupRemoveType);

    //Deleting the testCases from addedTestCases 
    setAddedTestCases((addedTestCases) => {
      const temp = addedTestCases.pop();
      const tempDeletedArray = addedTestCases.filter((e) => e.id !== temp.id);
      return tempDeletedArray;
    });
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
  

  return (
    <ContainerMid>
      <ContainerBoxes>
        <WrapperBoxes>
          <ContentBoxes
            input="text"
            placeholder="Add Test Cases here"
            value={enteredTestcases}
            onChange={(event) => setEnteredTestcases(event.target.value)}
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
            {addedTestCases.map((test) => (
              <TestCasesList
                key={test.id}
                id={test.id}
                testCase={test.testCase}
                points={test.points}
              />
            ))}
          </ContentBox2>
        </WrapperBox2>
      </ContainerBox2>
    </ContainerMid>
  );
}

export default MidBody;
