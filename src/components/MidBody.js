import React, { useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import Button from "./Button";
import Boxes from "./Boxes";
import Box2 from "./Box2";

//Midbody css
const ContainerMid = styled.div`
  /* background-color: yellow; */
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
  height: 200px;
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
  top: 20%;
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
  top: 27%;
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
const ButtonRun = styled.button`
  margin: 0;
  position: absolute;
  bottom: 25%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  background-color: #00c853;
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

//BOX2 CSS
const ContainerBox2 = styled.div`
  flex: 5;
`;

const WrapperBox2 = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 50px;
`;

const ContentBox2 = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px;
  height: 442px;
  width: 100%;
  border: none;
`;

const testCases = [""];
function MidBody() {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [leftTestcases, setLeftTestcases] = useState("");
  // const [enteredTestCases, setEnteredTestCases] = useState();
  const [showTestCases, setSHowTestCases] = useState([]);
  const enteredTestCases = useRef();

  const addRef = useRef();
  const removeRef = useRef();

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
  // console.log(addRef);

  const addHandler = () => {
    setPopupAddType(!popupAddType);
    // testCases.push(leftTestcases);
    setLeftTestcases("");
    console.log(testCases);

    // setSHowTestCases(...showTestCases, enteredTestCases.current.value);
    // enteredTestCases.current.value=''

    // console.log(showTestCases)
  };

  // function testCasesHandler(event) {
  //   setEnteredTestCases(event.target.value);

  // console.log(enteredTestCases);
  console.log();
  return (
    <ContainerMid>
      <ContainerBoxes>
        <WrapperBoxes>
          <ContentBoxes
            input="text"
            placeholder="Add Test Cases here"
            // onChange={testCasesHandler}
            // ref={enteredTestCases}
            value={leftTestcases}
            onChange={(event) => {
              setLeftTestcases(event.target.value);
            }}
          ></ContentBoxes>
          <ContentBoxes input="text" placeholder="Dry Run Here"></ContentBoxes>
        </WrapperBoxes>
      </ContainerBoxes>
      {/* <Boxes onBoxes={boxesHandler}></Boxes> */}

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
          <ButtonRemove
            ref={removeRef}
            onClick={() => setPopupRemoveType(!popupRemoveType)}
          >
            Remove
          </ButtonRemove>
          {popupRemoveType && (
            <Popup
              color="#B71C1C"
              onCallPopup={handlePopupRemove}
              text="Test cases removed successfully!"
            ></Popup>
          )}
          <ButtonRun>Run</ButtonRun>
        </WrapperButton>
      </ContainerButton>
      {/* <Button></Button> */}

      <ContainerBox2>
        <WrapperBox2>
          {/* <ContentBox2 input="text" placeholder="Add Test Cases">{testCases[0]}</ContentBox2> */}

          {testCases.map((testCase) => (
            <ContentBox2>{testCase}</ContentBox2>
          ))}
        </WrapperBox2>
      </ContainerBox2>
      {/* <Box2 txt={showTestCases}></Box2> */}
    </ContainerMid>
  );
}

export default MidBody;
