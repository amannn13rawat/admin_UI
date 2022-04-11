import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding:0px 550px;
  border-radius: 10px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 10px 10px ;
  /* width: 100%; */
  background-color: white;
  /* max-width: 640px;
  border-radius: 10px; */
  font-size: 10px;
 
`;

function AddPopup(props) {
  return (props.trigger) ? (
    <Container>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  ) : "";
}

export default AddPopup