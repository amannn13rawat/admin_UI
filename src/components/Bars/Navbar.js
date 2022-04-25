import React from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #0d47a1;
  color: white;
`;
const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  align-items: center;
  display: flex;
`;

const Right = styled.div`
  align-items: center;
  display: flex;
`;


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <p>Breakfast for Brains-Coding Challange!</p>
        </Left>
        <Right>
          <p>User</p>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
