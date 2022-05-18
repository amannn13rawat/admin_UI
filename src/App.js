import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";


function App() {
  const [questionText, setQuestionText] = useState("");
  const [defaultReward, setDefaultReward] = useState(0);
  //testing
  const [questionStartDate, setQuestionStartDate] = useState("");
  const [questionEndDate, setQuestionEndDate] = useState("");
  const [testCases, setTestCases] = useState([]);

  function onSaveProblemStatementHandler(problemStatemnet) {
    setQuestionText(problemStatemnet);
  }

  const onSaveRewardHandler = (weightage) => {
    //add the weightage to the prev value of defaultReward
    setDefaultReward(parseInt(defaultReward) + parseInt(weightage));
  };
  // console.log(defaultReward)
  function addDateTimeHandler(selectStartDate, selectEndDate) {
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }

  const onSaveTestCaseHandler = (testCase) => {
    setTestCases(testCases => [...testCases, testCase]);
  }

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
        saveWeightage={onSaveRewardHandler}
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
