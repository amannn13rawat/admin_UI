import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";


function App() {
  const [questionText, setQuestionText] = useState("");
  const [defaultReward, setDefaultReward] = useState("");
  //testing
  const [questionStartDate, setQuestionStartDate] = useState("");
  const [questionEndDate, setQuestionEndDate] = useState("");
  const [testCases, setTestCases] = useState([]);
  let netWeightage = 0;

  function onSaveProblemStatementHandler(problemStatemnet) {
    setQuestionText(problemStatemnet);
  }

  const onSaveRewardHandler = (reward) => {
    setDefaultReward(reward);
  };
  // console.log(defaultReward)
  function addDateTimeHandler(selectStartDate, selectEndDate) {
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }

  const onSaveTestCaseHandler = (testCase) => {
    setTestCases(testCases => [...testCases, testCase]);
  }

  // console.log("Kaam vali array", testCases);
  const testCaseArrayList = [];

  testCases.map((testCase) => {
    testCaseArrayList.push(testCase.input + ":" + testCase.output);
    netWeightage = netWeightage + parseInt(testCase.points);
  });
  console.log("testCases Array list",testCaseArrayList)
  console.log("netweightage",netWeightage)

  const backEnd = {
    questionText: questionText,
    testCases: testCases,
    defaultReward: defaultReward,
  };

  return (
    <>
      <Navbar></Navbar>
      <ProblemStatement
        onSaveProblemStatement={onSaveProblemStatementHandler}
      ></ProblemStatement>
      <MidBody
        saveTestCase={onSaveTestCaseHandler}
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
