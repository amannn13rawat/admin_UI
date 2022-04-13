import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */
  background-color: #0d47a1;
  position: absolute;
  bottom: 230px;
  left: 440px;
  width: 480px;
  z-index: 100 !important;
  border-radius: 5px;
  height: 85px;
  color: #ffffff;
  /* display: flex; */
  /* justify-content: space-around;
   align-items: center; */
`;

const Wrapper = styled.div`
  padding: 15px 60px;
  text-align: center;
  justify-content: center;
  /* align-items: center; */
`;

const PopupText = styled.div`
  font-size: 15px;
  text-align: center;
  /* padding: 5px 10px; */
`;

const ButtonSubmitContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  /* background-color: pink; */

  /* align-items: center; */
`;

const ButtonOkayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
  margin-top: 15px;

  /* align-items: center; */
`;

const ButtonSubmit = styled.button`
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 5px 30px;
  /* display: flex; */
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
  /* display: flex; */
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
  /* display: flex; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  background-color: #00c853;
`;

function SubmitPopup({ closedPopup }) {
  const [openPopup, setOpenPopup] = useState(false);
  let popupText = useRef();

  function submitPopupHandler() {
    setOpenPopup(!openPopup);
  }

  useEffect(() => {
    let handler = (event) => {
      if (!popupText.current.contains(event.target)) {
        closedPopup(false);
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
            <ButtonSubmit onClick={submitPopupHandler}>Submit</ButtonSubmit>
            <ButtonCancel>Cancel</ButtonCancel>
          </ButtonSubmitContainer>
        </Wrapper>
      </Container>

      {openPopup && (
        <Container ref={popupText}>
          <Wrapper>
            <PopupText>Successfully submitted the problem statement!</PopupText>
            <ButtonOkayContainer>
              <ButtonOkay onClick={() => closedPopup(false)}>Okay!</ButtonOkay>
            </ButtonOkayContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default SubmitPopup;
