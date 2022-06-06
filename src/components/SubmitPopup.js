import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
/**
 * SubmitPopup component 
 * @author AR097763
 */
const Container = styled.div`
  background-color: #0d47a1;
  position: fixed;
  bottom: 300px;
  left: 530px;
  width: 480px;
  z-index: 100 !important;
  border-radius: 5px;
  height: 85px;
  color: #ffffff;
`;

const Wrapper = styled.div`
  padding: 15px 60px;
  text-align: center;
  justify-content: center;
`;

const PopupText = styled.div`
  font-size: 15px;
  text-align: center;
`;

const ButtonSubmitContainer = styled.div`
  padding: 10px 30px;
  display: flex;
`;

const ButtonOkayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
`;

const ButtonSub = styled.button`
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  color: #ffffff;
  background-color: #00c853;
`;
const ButtonCancel = styled.button`
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  background-color: #b71c1c;
`;

const ButtonOkay = styled.button`
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  background-color: #00c853;
`;

/**
 * @typedef PropType
 * @property {function} onClosedPopup - function to call when popup is closed
 * @returns {JSX.Element}
 */
function SubmitPopup({ onClosedPopup }) {
  /**
   * @param openPopup - boolean to open popup
   */
  const [openPopup, setOpenPopup] = useState(false);
  let popupText = useRef();

  /**
   * @description submitPopupHandler - function to handle submit popup
   */
  function submitPopupHandler() {
    setOpenPopup(!openPopup);
  }

 /** 
  * @description - function to remove submitPopup when clicked anywhere in the screen.
  */
 /* istanbul ignore next */
  useEffect(() => {
    let handler = (event) => {
      if (!popupText.current.contains(event.target)) {
        onClosedPopup(event);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <Container ref={popupText}>
        <Wrapper>
          <PopupText>Do You Want to Submit the problem Statement?</PopupText>
          <ButtonSubmitContainer>
            <ButtonSub type="submit" onClick={submitPopupHandler}>
              Submit
            </ButtonSub>
            <ButtonCancel type="cancel">Cancel</ButtonCancel>
          </ButtonSubmitContainer>
        </Wrapper>
      </Container>

      {openPopup && (
        <Container ref={popupText}>
          <Wrapper>
            <PopupText>Successfully submitted the problem statement!</PopupText>
            <ButtonOkayContainer>
              <ButtonOkay type="okay" onClick={onClosedPopup}>
                Okay!
              </ButtonOkay>
            </ButtonOkayContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default SubmitPopup;
