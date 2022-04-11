import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Boxes from "./Boxes";
import Box2 from "./Box2";


const btns = [
  {
    Add: "Add",
    Remove: "Remove",
    Run: "Run",
  },
];

const Container = styled.div`
  background-color: yellow;
  width: 100%;
  display: flex;
  height:calc(100vh-190px);

  
   /* align-items: center; */
  /* justify-content: center;
  flex-wrap: wrap;  */
  /* padding: 20px 20px; */
`;

function MidBody() {
  return (
    <Container>
      <Boxes></Boxes>
      <Button items={btns}></Button>
      <Box2></Box2>
     

    </Container>
  );
}
export default MidBody;
