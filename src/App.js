import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";

function App() {

  const [questionText,setQuestionText]=useState('')
  const [defaultReward,setDefaultReward]=useState('')


  function onSaveProblemStatementHandler(problemStatemnet) {
    // const questionText=problemStatemnet
    setQuestionText(problemStatemnet)
    // console.log(typeof(questionText));
   
  }

  function onSaveRewardHandler(reward){
    // const defaultReward=reward
    setDefaultReward(reward)
    // console.log(defaultReward)
  }
  
  const backEnd={
    questionTxt:questionText,
    defaultRwrd:parseInt(defaultReward,10)
  }

  // console.log(questionText)
  console.log(backEnd)
  return (
    <>
      <Navbar></Navbar>
      <ProblemStatement
        onSaveProblemStatement={onSaveProblemStatementHandler}
      ></ProblemStatement>
      <MidBody onSaveReward={onSaveRewardHandler}></MidBody>
      <BottomBtn backEnd={backEnd}></BottomBtn>
      <Footer></Footer>
    </>
  );
}

export default App;
