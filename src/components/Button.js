import React, { useState } from "react";
import styled from "styled-components";
import AddPopup from "./AddPopup";

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

function Button(props) {
  const [popupType, setPopupType] = useState("");
  return (
    <Container>
      <Wrapper>
        <ButtonAdd onClick={() => setPopupType("Add")}>
          {props.items[0].Add}
        </ButtonAdd>
        {popupType === "Add" && <AddPopup type="Add" color="#00C853"></AddPopup>}
        <ButtonRemove onClick={() => setPopupType("Remove")}>
          {props.items[0].Remove}
        </ButtonRemove>
        {popupType === "Remove" && <AddPopup type="Remove" color="#B71C1C"></AddPopup>}
        <ButtonRun>{props.items[0].Run}</ButtonRun>
      </Wrapper>
    </Container>
  );
}
export default Button;
