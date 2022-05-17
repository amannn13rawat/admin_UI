import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120px;
  margin: 0;
  /* background-color: red; */
`;

const Wrapper = styled.div`
  padding: 30px 30px;
  margin-right: 20px;
`;

const ProblemBox = styled.textarea`
  border-radius: 10px;
  padding: 10px;

  background: #c4c4c4;
  height: 55px;
  width: 100%;
  border: none;
`;

function ProblemStatement(props) {
  const [problemstmnt, setProblemStmnt] = useState("");

  function problemStatementHandler(event) {
    setProblemStmnt(event.target.value);
    console.log(problemstmnt);
    props.onSaveProblemStatement(problemstmnt);
  }
  // console.log(problemstmnt)
  return (
    <Container>
      <Wrapper>
        <ProblemBox
          maxLength={500}
          role="textbox"
          type="text"
          placeholder="Problem Statement here upto 500 characters *"
          onChange={problemStatementHandler}
        ></ProblemBox>
      </Wrapper>
    </Container>
  );
}

export default ProblemStatement;
