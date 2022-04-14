import { pink } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Container = styled.div`
  flex: 1;
  /* background-color: green; */
  position: relative;

  /* height: 100%; */
`;

const Wrapper = styled.div`
  /* position: relative; */
  /* background-color: blue; */

  padding: 5px 5px;
`;

const ButtonAdd = styled.button`
  margin: 0;
  position: absolute;
  ${"" /* top: 50px; */}
  top:20%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  ${
    "" /* cursor: pointer;
  border: none;
  padding: 5px;
  margin: 0;
  border-radius: 10px; */
  }
  background-color: #00C853;
  /* margin : 10px 20px; */
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
  ${"" /* top: 50px; */}
  top:27%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  background-color: #b71c1c;
  /* margin : 10px 20px; */
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
  ${"" /* top: 50px; */}
  bottom:25%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  background-color: #00c853;
  /* margin : 10px 20px; */
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

// const runPopup = [
//   {
//     color: "pink",
//     text: "runnning text",
//   },
//   {
//     color: "yellow",
//     text: "succesfully",
//   },
// ];

// const runBtnTxt = ["1", "2", "3"];

function Button(props) {
  const [popupAddType, setPopupAddType] = useState(false);
  const [popupRemoveType, setPopupRemoveType] = useState(false);
  const [runBtn1, setRunBtn1] = useState(false);
  const [runBtn2, setRunBtn2] = useState(false);
  const [runBtn3, setRunBtn3] = useState(false);

  const addRef = useRef();

  const handleCallback=(stateReplied,event)=>{
    if(!addRef.current.contains(event.target))
       setPopupAddType(stateReplied);
  }
  console.log(addRef);

  //map can be used to loop through an array
  const runClickHandler = () => {
    setRunBtn1(true);
    setTimeout(() => {
      setRunBtn2(true);
    }, 1500);
    setTimeout(() => {
      setRunBtn3(true);
    }, 2500);
  };

  return (
    <Container>
      <Wrapper>
        <ButtonAdd ref={addRef} onClick={() => setPopupAddType(!popupAddType)}>
          Add
        </ButtonAdd>
        {popupAddType && (
          <Popup
            color="#00C853"
            // parentRef={addRef}
            // closePopup={setPopupAddType}
            parentCallback={handleCallback}
            text="Test cases added successfully!"
          ></Popup>
        )}
        <ButtonRemove onClick={() => setPopupRemoveType(true)}>
          Remove
        </ButtonRemove>
        {popupRemoveType && (
          <Popup
            color="#B71C1C"
            closePopup={setPopupRemoveType}
            text="Test cases removed successfully!"
          ></Popup>
        )}
        <ButtonRun onClick={() => runClickHandler()}>Run</ButtonRun>
        {runBtn1 && <Popup color="red" closePopup={setRunBtn1} text="1!"></Popup>}
        {runBtn2 && <Popup color="yellow" closePopup={setRunBtn2} text="2!"></Popup>}
        {runBtn3 && <Popup color="green" closePopup={setRunBtn3} text="3!"></Popup>}
      </Wrapper>
    </Container>
  );
}
export default Button;
