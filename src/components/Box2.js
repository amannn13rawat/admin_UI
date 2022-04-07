import React from "react";
import styled from "styled-components";


const Container=styled.div`
    flex:4;
    /* background-color: violet; */
    /* width: 100%; */
    /* height: 500px; */
`;

const Wrapper=styled.div`
    padding: 20px 35px;
    
`;

const Content=styled.div`
    border-radius: 10px;
   background: #C4C4C4;
   padding: 10px;
   /* margin-top: 10px; */
   height: 420px;
   /* width:450; */
`;
function Box2(){
    return(
        <Container>
            <Wrapper>
                <Content>Add Test Cases</Content>
            </Wrapper>
        </Container>
    );



}

export default Box2;
