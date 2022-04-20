import { keyframes } from "@emotion/react";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
// import './AddPopup.css'

const PopupContainer = styled.div`
  top: 57px;
  left: 550px;
  position: fixed;
  background-color: ${(props) => props.bgcolor};
  border-radius: 5px;
  z-index: 100 !important;
  width: 480px;
  height: 25px;
  color: #ffffff;
  box-shadow: 2px 3px 5px #999;
`;

const drop = keyframes`
    0%  {transform:translateY(-1000px);}
  100% { transform:translateY(0)}
 `;

const PopupText = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  font-size: 13px;
`;

function Popup({ color, text, onCallPopup,}) {
  let popupText = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      // !parentRef.current.contains(event.target)
      if (!popupText.current.contains(event.target)) {
        // console.log(event.target);
        // console.log(popupText.current)
        // // closePopup(false);
        onCallPopup(false,event);
        
        
      }
    });
  });
  return (
    <PopupContainer bgcolor={color} ref={popupText}>
      <PopupText>{text}</PopupText>
    </PopupContainer>
  );
}

export default Popup;
