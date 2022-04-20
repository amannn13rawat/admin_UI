import React from "react";
import styled from "styled-components";

const ContainerBox2 = styled.div`
  flex: 5;
  /* background-color: violet; */
  /* width: 100%; */
  /* height: 500px; */
`;

const WrapperBox2 = styled.div`
  padding-top: 5px;
  padding-left: 30px;

  padding-right: 50px;
`;

const ContentBox2 = styled.textarea`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px;
  /* margin-top: 10px; */
  height: 442px;
  width: 100%;
  border: none;
`;
function Box2({txt}) {
  // console.log(addTxt)
  return (
    <ContainerBox2>
      <WrapperBox2>
        <ContentBox2 input="text" placeholder="Add Test Cases">{txt}</ContentBox2>
      </WrapperBox2>
    </ContainerBox2>
  );
}

export default Box2;
