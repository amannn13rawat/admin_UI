import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 5;
  /* background-color: violet; */
  /* width: 100%; */
  /* height: 500px; */
`;

const Wrapper = styled.div`
  padding-top: 5px;
  padding-left: 30px;

  padding-right: 50px;
`;

const Content = styled.textarea`
  border-radius: 10px;
  background: #c4c4c4;
  padding: 10px;
  /* margin-top: 10px; */
  height: 442px;
  width: 100%;
  border: none;
`;
function Box2() {
  return (
    <Container>
      <Wrapper>
        <Content input="text" placeholder="Add Test Cases"></Content>
      </Wrapper>
    </Container>
  );
}

export default Box2;
