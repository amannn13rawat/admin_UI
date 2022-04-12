import { keyframes } from "@emotion/react";
import React from "react";
import styled from "styled-components";
// import './AddPopup.css'

const PopupContainer = styled.div`
  top: 57px;
  left: 440px;
  position: fixed;
  background-color: ${props => props.bgcolor};
  border-radius: 5px;
  z-index: 100 !important;
  width: 480px;
  height: 25px;
  color: #FFFFFF;
  box-shadow:2px 3px 5px #999;
  
`;

const drop=keyframes`
  0%{opacity:0}
  70%{transform:translateY(60px)}
  100%{transform:translateY(43px); opacity:1;}
 `;

const PopupText = styled.div`
  text-align: center;
  justify-content:center;
  align-items: center;
  padding: 3px 10px;
  font-size: 13px;
`;

function AddPopup({ type,color }) {
  return (
    <PopupContainer bgcolor={color}>
      {type==="Add"&&<PopupText>Test Cases added successfully!</PopupText>}
      {type==="Remove"&&<PopupText>Test Cases added successfully!</PopupText>}
    </PopupContainer>
  
  );
}

export default AddPopup;
