import styled from "styled-components";

const Container = styled.div``; 
const Wrapper = styled.div` 
  display: flex; 
  padding: 10px 70px; 
`; 
const Button = styled.div` 
  margin-right: 10px; 
`; 


function BottomBtn(){
    return ( 
        <Container> 
          <Wrapper> 
            <Button> 
              <button>Submit</button> 
            </Button> 
            <Button> 
              <button>Clear</button> 
            </Button> 
          </Wrapper> 
        </Container> 
      ); 

};

export default BottomBtn;
