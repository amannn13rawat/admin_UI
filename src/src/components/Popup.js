import React, { useRef, useEffect } from "react";
import styled from "styled-components";


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

const PopupText = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  font-size: 13px;
`;

function Popup({ color, text, onCallPopup }) {
  let popupText = useRef();

  //Disappearing Popup when clicked anywhere on the screen
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!popupText.current.contains(event.target)) {
        onCallPopup(false, event);
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
