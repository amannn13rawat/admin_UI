import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";

function App() {
  const [questionText, setQuestionText] = useState("");
  const [defaultReward, setDefaultReward] = useState("");
  const [questionStartDate, setQuestionStartDate] = useState("");
  const [questionEndDate, setQuestionEndDate] = useState("");

  function onSaveProblemStatementHandler(problemStatemnet) {
    // const questionText=problemStatemnet
    setQuestionText(problemStatemnet);
    // console.log(typeof(questionText));
  }

  function onSaveRewardHandler(reward) {
    // const defaultReward=reward
    setDefaultReward(reward);
    // console.log(defaultReward)
  }

  function addDateTimeHandler(selectStartDate, selectEndDate) {
    // console.log(selectStartDate)
    // console.log(selectEndDate)
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }
  // console.log(questionStartDate)
  // console.log(questionEndDate)

  // function removeHandler(){
  //  setQuestionText("")
  //  console.log(questionText)
  // }

  const backEnd = {
    questionText: questionText,
    // testCases:["10 20:Sum 40","30 80:Sum 110"],
    defaultReward: parseInt(defaultReward, 10),
  };

  // console.log(questionText)
  // console.log(backEnd)
  return (
    <>
      <Navbar></Navbar>
      <ProblemStatement
        onSaveProblemStatement={onSaveProblemStatementHandler}
        questionText={questionText}
      ></ProblemStatement>
      <MidBody
        onSaveReward={onSaveRewardHandler}
        onAddDateTime={addDateTimeHandler}
      ></MidBody>
      <BottomBtn
        backEnd={backEnd}
        questionStartDate={questionStartDate}
        questionEndDate={questionEndDate}
      ></BottomBtn>
      <Footer></Footer>
    </>
  );
}

export default App;
