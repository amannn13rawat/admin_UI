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
  const [testCases, setTestCases] = useState([]);

  function onSaveProblemStatementHandler(problemStatemnet) {
    setQuestionText(problemStatemnet);
  }
  // console.log(questionText);

  const onSaveRewardHandler = (reward) => {
    setDefaultReward(reward);
  };
  // console.log("default reaward", defaultReward);

  function addDateTimeHandler(selectStartDate, selectEndDate) {
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }
  // console.log(questionStartDate)
  // console.log(questionEndDate)

  // console.log(testCases)
  const testCaseArrayList = [];

  //  testCaseArray.push(
  //   testCases.map((testCase) => (testCase.input+':'+testCase.output))
  //  )

  testCases.map((testCase) => {
    testCaseArrayList.push(testCase.input + ":" + testCase.output);
  });

  // console.log(testCaseArrayList);

  const backEnd = {
    questionText: questionText,
    testCases: testCaseArrayList,
    defaultReward: parseInt(defaultReward, 10),
  };

  // console.log(backEnd.questionText)

  return (
    <>
      <Navbar></Navbar>
      <ProblemStatement
        onSaveProblemStatement = {onSaveProblemStatementHandler}
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
