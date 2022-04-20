import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Boxes from "./Boxes";
import Box2 from "./Box2";


// const btns = [
//   {
//     Add: "Add",
//     Remove: "Remove",
//     Run: "Run",
//   },
// ];

const Container = styled.div`
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  /* height: 100px; */

  
   /* align-items: center; */
  /* justify-content: center;
  flex-wrap: wrap;  */
  /* padding: 20px 20px; */
`;



function MidBody() {

const[text,setText]=useState()
// const[addText,setAddText]=useState()
const btnRef=useRef()
  
//from Boxes
  function boxesHandler(textSend){
    // console.log(textSend)
    // // const text=textSend
    setText(textSend)
  }
 

  //from Button
  // function addTextHandler(addTextSend){
  //   // console.log(addTextSend)
  //   const AddText=btnRef.current.value
  //   // setAddText(addTextSend)
  //   console.log(AddText)
  // }
  
  
 

  return (
    <Container>
      <Boxes onBoxes={boxesHandler}></Boxes>
      <Button txt={text}  ref={btnRef}></Button>
      <Box2 ></Box2>
     

    </Container>
  );
}
export default MidBody;
