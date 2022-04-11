import styled from "styled-components";
import React from "react";


const Container=styled.div`
 
    /* background-color: yellow;  */
     /* height: 500px; */
    flex :5;
   
`;

const Wrapper=styled.div`
    /* background-color: green; */
    /* padding: 20px 30px  ; */
    padding-top: 20px;
  padding-left: 30px;
  padding-right: 50px;
`;

const Content=styled.textarea`

   border-radius: 10px;
   background: #C4C4C4;
   padding: 10px;
   /* margin-top: 10px; */
   margin-bottom: 20px;
    height: 200px;
    width: 100%; 
    border:none;
`;

function Boxes(){
    return(
        <Container>
            <Wrapper>
                <Content input="text" placeholder="Add Test Cases here"></Content>
                <Content input="text" placeholder="Dry Run Here"></Content>
            </Wrapper>
        </Container>
        
    );
}

export default Boxes;