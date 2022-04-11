import React from "react";
import styled from "styled-components";
// import './AddPopup.css'

const PopupContainer = styled.div`
  top: 60px;
  left: 540px;
  position: fixed;
  background-color: blue;
  border-radius: 5px;
  z-index: 100 !important;
  width: 300px;
`;

const PopupText = styled.div`
  /* background-color: white; */
  /* left: 400px; */
  text-align: center;
  justify-content: center;
  padding: 3px 10px;
`;

function AddPopup() {
  return (
    <PopupContainer>
      <PopupText>Add Test Cases </PopupText>
    </PopupContainer>
  );
}

export default AddPopup;
