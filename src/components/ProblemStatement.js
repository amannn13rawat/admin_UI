import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 120px;

  width: 100%;
  /* background-color: green; */
  
`;

const Wrapper = styled.div`
  padding: 20px 50px;
  
`;

const ProblemBox = styled.div`
    /* margin-left: 30px;
    margin-right: 30px; */
    border-radius: 10px;
    padding: 10px;
    display: flex;
    background :#C4C4C4;
    height: 65px;
`;

function ProblemStatement() {
  return (
    <Container>
      <Wrapper>
        <ProblemBox>
          <p>Problem Statement Here</p>
        </ProblemBox>
      </Wrapper>
    </Container>
  );
}

export default ProblemStatement;
