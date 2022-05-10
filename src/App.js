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
  const [testCases,setTestCases] = useState([]);

  function onSaveProblemStatementHandler(problemStatemnet) {
    setQuestionText(problemStatemnet);
  }

  function onSaveRewardHandler(reward) {
    setDefaultReward(reward);
  }

  function addDateTimeHandler(selectStartDate, selectEndDate) {
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }

 const testCaseArray = [];

//  testCaseArray.push(
//   testCases.map((testCase) => (testCase.input+':'+testCase.output))
//  )

testCases.map((testCase,index) => {
  if(index>0)   testCaseArray.push(testCase.input+':'+testCase.output)
})


  const backEnd = {
    questionText: questionText,
    testCases:testCaseArray,
    defaultReward: parseInt(defaultReward, 10),
  };

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
        onAddTestCases={setTestCases}
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
