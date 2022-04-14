import { useState } from "react";
import styled from "styled-components";
import SubmitPopup from "./SubmitPopup";

const Container = styled.div`
  /* background-color: orange;
  /* display:flex; */
  flex:1; 
  height: 40px;

  
  
`;
const Wrapper = styled.div`
  display: flex;
  padding: 0px 30px;
  margin-bottom: 20px;
  
`;

const ButtonSubmit = styled.button`
  margin-right: 10px ;
  background-color: #00C853;
  /* margin : 10px 20px; */
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 3px 30px;
  display: flex;
  align-items: center;
  justify-content:center;
  font-size: 15px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

const ButtonClear = styled.button`
  /* margin-right: 10px; */
  background-color:#B71c1c;
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

function BottomBtn() {
  
  const[showClickPopup,setShowClickPopup] = useState(false)
  
  // function popupHandler(){
  //   setShowClickPopup(true)
  // }
  console.log(showClickPopup);
  return (
    <Container>
      <Wrapper>
        <ButtonSubmit onClick={() => setShowClickPopup((!showClickPopup) )}>Submit</ButtonSubmit>
        {showClickPopup && <SubmitPopup closedPopup={setShowClickPopup} ></SubmitPopup>}
        <ButtonClear>Clear</ButtonClear>
      </Wrapper>
    </Container>

  );
}

export default BottomBtn;
