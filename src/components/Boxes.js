import styled from "styled-components";
import { React, useState } from "react";

const Container = styled.div`
  /* background-color: yellow;  */
  /* height: 500px; */
  flex: 5;
`;

const Wrapper = styled.div`
  /* background-color: green; */
  /* padding: 20px 30px  ; */
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 50px;
  /* padding-bottom: 20px; */
`;

const Content = styled.textarea`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px;
  /* margin-top: 10px; */
  margin-bottom: 20px;
  height: 200px;
  width: 100%;
  border: none;
`;

function Boxes(props) {
  const [enteredTestCases, setEnteredTestCases] = useState("");

  function testCasesHandler(event) {
    // console.log(event.target.value);
    setEnteredTestCases(event.target.value);
    
  }
  props.onBoxes(enteredTestCases);
//   console.log(enteredTestCases);

  return (
    <Container>
      <Wrapper>
        <Content
          input="text"
          placeholder="Add Test Cases here"
          onChange={testCasesHandler}
        ></Content>
        <Content input="text" placeholder="Dry Run Here"></Content>
      </Wrapper>
    </Container>
  );
}

export default Boxes;
