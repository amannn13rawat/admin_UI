/**
 * ProblemStatement component
 *
 * @author AR097763
 */

 import { React } from "react";
 import styled from "styled-components";
 
 const Container = styled.div`
   width: 100%;
   height: 120px;
   margin: 0;
 `;
 
 const Wrapper = styled.div`
   padding: 30px 30px;
   margin-right: 20px;
 `;
 
 const ProblemBox = styled.textarea`
   border-radius: 10px;
   padding: 10px;
   font-size: medium;
   background: white;
   height: 55px;
   width: 100%;
   border: 1px solid black;
   ::placeholder {
     color: black;
     font-size: small;
   }
   resize: none;
 `;
 
 /**
  *
  * @typedef PropType
  * @property {function} onSaveProblemStatement - function to save problem statement
  */
 
 /**
  *
  * @param {PropType} props
   @returns {React.Component}
  */
 
 function ProblemStatement(props) {
   return (
     <Container>
       <Wrapper>
         <ProblemBox
           maxLength={500}
           role="textbox"
           type="text"
           placeholder="Problem Statement here *"
           onChange={(event) => props.onSaveProblemStatement(event.target.value)}
         ></ProblemBox>
       </Wrapper>
     </Container>
   );
 }
 
 export default ProblemStatement;
 