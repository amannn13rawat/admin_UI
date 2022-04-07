import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  /* background-color: green; */
  position:relative;
  /* height: 100%; */
`;

const Wrapper = styled.div`
  /* position: relative; */
  /* background-color: blue; */

  padding: 5px 5px;
`;


const ButtonAdd = styled.button`
  margin: 0;
  position: absolute;
  ${"" /* top: 50px; */}
  top:20%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);


  ${'' /* cursor: pointer;
  border: none;
  padding: 5px;
  margin: 0;
  border-radius: 10px; */}
  background-color: #00C853;
  /* margin : 10px 20px; */
  border: none;
  border-radius: 5px;
  padding: 3px 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;
const ButtonRemove = styled.button`
  margin: 0;
  position: absolute;
  ${"" /* top: 50px; */}
  top:30%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);


  background-color:#B71c1c;
  /* margin : 10px 20px; */
  border: none;
  border-radius: 5px;
  padding: 3px 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;
const ButtonRun = styled.button`
  margin: 0;
  position: absolute;
  ${"" /* top: 50px; */}
  bottom:15%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);



  background-color: #00C853;
  /* margin : 10px 20px; */
  border: none;
  border-radius: 5px;
  padding: 3px 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

function Button(props) {
  return (
    <Container>
      <Wrapper>
        <ButtonAdd>{props.items[0].Add}</ButtonAdd>
        <ButtonRemove>{props.items[0].Remove}</ButtonRemove>
        <ButtonRun>{props.items[0].Run}</ButtonRun>
      </Wrapper>
    </Container>
  );
}
export default Button;
