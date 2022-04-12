import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* height: 120px; */

  width: 100%;
  /* background-color: pink; */
  height:120px;
  margin:0;
  
`;

const Wrapper = styled.div`
  padding :40px 30px;
  margin-right: 20px;
  /* margin-top: 20px; */
  
`;

const ProblemBox = styled.textarea`
  /* margin-left: 30px;
    margin-right: 30px; */
  border-radius: 10px;
  padding: 10px;
  /* display: flex; */
  background: #c4c4c4;
  height: 50px;
  width: 100%;
  border: none;
  
`;

function ProblemStatement() {
  return (
    <Container>
      <Wrapper>
        <ProblemBox
          type="text"
          placeholder="Problem Statement here"
        ></ProblemBox>
      </Wrapper>
    </Container>
  );
}

export default ProblemStatement;
