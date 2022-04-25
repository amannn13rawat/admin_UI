import React from "react";
import styled from "styled-components";

const UL = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 0.3rem 0;
  padding-right: 1.5rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LI = styled.div`
  margin: 0.5rem 0;
  color: black;
  background-color: #d3d3d3;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 5px;
`;

function TestCasesList(props) {
  return (
    <UL>
      <LI>{props.testCase}</LI>
      <LI>{props.points}</LI>
    </UL>
  );
}

export default TestCasesList;
