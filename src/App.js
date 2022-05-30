import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";

function App() {
  const [questionText, setQuestionText] = useState("");
  const [defaultReward, setDefaultReward] = useState(0);
  const [questionStartDate, setQuestionStartDate] = useState("");
  const [questionEndDate, setQuestionEndDate] = useState("");
  const [testCases, setTestCases] = useState([]);

  function onSaveProblemStatementHandler(problemStatemnet) {
    setQuestionText(problemStatemnet);
  }

  function onSaveRewardHandler(weightage) {
    //add the weightage to the prev value of defaultReward
    setDefaultReward(parseInt(defaultReward) + parseInt(weightage));
  }

  function onDeleteWeightageHandler(weightage) {
    setDefaultReward(parseInt(defaultReward) - parseInt(weightage));
  }

  function onDeleteTestCaseHandler(deleteTestCase) {
    const deletedTestCase = deleteTestCase.input + ":" + deleteTestCase.output;
    setTestCases((prevTest) => {
      return prevTest.filter((test) => test !== deletedTestCase);
    });
  }

function onRemoveTestCasesHandler(){
  setTestCases([]);
  setDefaultReward(0);
}

  function addDateTimeHandler(selectStartDate, selectEndDate) {
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }

  function onSaveTestCaseHandler(testCase) {
    // adding backendTestCasesArrayElement to testCases
    setTestCases((testCases) => [...testCases, testCase]);
  }

  const backEndCall = {
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
        onSaveTestCase={onSaveTestCaseHandler}
        onSaveWeightage={onSaveRewardHandler}
        onDeleteWeightage={onDeleteWeightageHandler}
        onDeleteTestCase={onDeleteTestCaseHandler}
        onRemoveTestCases={onRemoveTestCasesHandler}
        onSaveReward={onSaveRewardHandler}
        onAddDateTime={addDateTimeHandler}
      ></MidBody>
      <BottomBtn
        backEndCall={backEndCall}
        questionStartDate={questionStartDate}
        questionEndDate={questionEndDate}
      ></BottomBtn>
      <Footer></Footer>
    </>
  );
}

export default App;
