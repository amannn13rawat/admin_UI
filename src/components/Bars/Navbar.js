import React from "react";

import styled from "styled-components";
// import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
    height: 50px;
    background-color: #0d47a1;
    color: white;
 `;
const Wrapper =styled.div`
    padding: 15px 20px;
    display: flex; 
    align-items:center ;
    justify-content: space-between; 
 `;
const Left =styled.div`
    align-items: center;
    display: flex;
    /* justify-content: space-between; */
 `;

 const Right =styled.div`
    align-items: center;
    display: flex;
    /* justify-content: space-between; */
 `;

//  const Image=styled.div`
//  `;

function Navbar() {
  return (
    <Container> 
      <Wrapper>
        <Left >
          {/* <Image>
            <PersonIcon/>
          </Image> */}
          <p>Breakfast for Brains-Coding Challange!</p>
        </Left>
        <Right>
          <p>User</p>
          {/* <Image>
            <PersonIcon/>
          </Image> */}
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
