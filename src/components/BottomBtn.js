import { useRef, useState } from "react";
import styled from "styled-components";
import SubmitPopup from "./SubmitPopup";

const Container = styled.div`
  flex: 1;
  height: 44px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0px 30px;
  margin-bottom: 20px;
`;

const ButtonSubmit = styled.button`
  margin-right: 10px;
  background-color: #00c853;
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 3px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

const ButtonClear = styled.button`
  background-color: #b71c1c;
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

function BottomBtn(props) {
  const [showClickPopup, setShowClickPopup] = useState(false);
  const submitRef = useRef();

  //to removee mouseClickdown event
  function closePopupHandler(event) {
    if (!submitRef.current.contains(event.target)) {
      setShowClickPopup(!showClickPopup);
    }
  }

  function submitHandler(){
    setShowClickPopup(!showClickPopup)
    console.log(props.backEnd)
  }

  return (
    <Container>
      <Wrapper>
        <ButtonSubmit
          ref={submitRef}
          onClick={submitHandler}
        >
          Submit
        </ButtonSubmit>
        {showClickPopup && (
          <SubmitPopup onClosedPopup={closePopupHandler}></SubmitPopup>
        )}
        <ButtonClear>Clear</ButtonClear>
      </Wrapper>
    </Container>
  );
}

export default BottomBtn;
