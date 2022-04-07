import styled from "styled-components";
import React from "react";


const Container=styled.div`
 
    /* background-color: yellow; */
    /* height: 500px; */
    flex :4;
   
`;

const Wrapper=styled.div`
    /* background-color: yellow; */
    padding: 20px 50px;
`;

const Content=styled.div`

   border-radius: 10px;
   background: #C4C4C4;
   padding: 10px;
   /* margin-top: 10px; */
   margin-bottom: 20px;
    height: 200px;
   /* width: 550px;  */
`;

function Boxes(){
    return(
        <Container>
            <Wrapper>
                <Content>Add Test Cases</Content>
                <Content>Dry Run</Content>
            </Wrapper>
        </Container>
        
    );
}

export default Boxes;