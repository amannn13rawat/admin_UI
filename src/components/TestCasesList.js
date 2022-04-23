import React from "react";
import styled from "styled-components";

// const Cont = styled.div`
//   background-color: grey;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
//   border-radius: 10px;
// `;

const UL = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 0.3rem 0;
  padding-right: 1.5rem;
  padding-left:0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* list-style: none; */
  /* padding: 1rem; */
  /* background-color: yellow; */
`;

const LI = styled.div`
  /* border: 1px solid #ccc; */
  /* padding: 0.5rem; */
    margin: 0.5rem 0;
  /* font-size: 1rem;
  font-weight: bold; */
  color: black;
  background-color:#D3D3D3;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 5px;
`;

function TestCasesList(props) {
  // console.log(props.id);
  return (
    <UL>
      <LI>{props.testCase}</LI>
      <LI>{props.points}</LI>
    </UL>

    // <Cont>{props.testList}</Cont>
  );
}

export default TestCasesList;
