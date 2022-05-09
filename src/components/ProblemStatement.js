import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120px;
  margin: 0;
`;

const Wrapper = styled.div`
  padding: 40px 30px;
  margin-right: 20px;
`;

const ProblemBox = styled.textarea`
  border-radius: 10px;
  padding: 10px;

  background: #c4c4c4;
  height: 50px;
  width: 100%;
  border: none;
`;

function ProblemStatement({giveProblemStatement}) {
  return (
    <Container>
      <Wrapper>
        <ProblemBox
          type="text"
          placeholder="Problem Statement here"
          onChange={(e) => giveProblemStatement(e.target.value)}
        ></ProblemBox>
      </Wrapper>
    </Container>
  );
}

export default ProblemStatement;
