import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";

/**
 * App component
 *
 * @author AR097763
 *
 */

function App() {
  const [questionText, setQuestionText] = useState("");
  const [defaultReward, setDefaultReward] = useState(0);
  const [questionStartDate, setQuestionStartDate] = useState("");
  const [questionEndDate, setQuestionEndDate] = useState("");
  const [testCases, setTestCases] = useState([]);

  /**
   * @description - function to set question text
   * @param {string} problemStatemnet - question statement passes to backend
   */
  function onSaveProblemStatementHandler(problemStatemnet) {
    setQuestionText(problemStatemnet);
  }

  /**
   * @description - function to save the default reward
   * @param {string} weightage - weightage of the testcases that should be added and passed to backend
   */
  function onSaveRewardHandler(weightage) {
    //add the weightage to the prev value of defaultReward
    setDefaultReward(parseInt(defaultReward) + parseInt(weightage));
  }

  /**
   * @description - function to delete the testcase from the testcases array
   * @param {string} weightage - weightage of the testcases that should be deleted and passed to backend
   */
  function onDeleteWeightageHandler(weightage) {
    setDefaultReward(parseInt(defaultReward) - parseInt(weightage));
  }

  /**
   * @description -  function is save the backendTestCasesArrayElement to the testcases array which is passed to backend
   * @param {string} testCase -  backendTestCasesArrayElement  that should be added to testCases array and passed to backend
   */
  function onSaveTestCaseHandler(backendTestCasesArrayElement) {
    // adding backendTestCasesArrayElement to testCases
    setTestCases((testCases) => [...testCases, backendTestCasesArrayElement]);
  }

  /**
   * @description - function to delete the testcase from the testcases array which is passed to backend
   * @param {string} deleteTestCase
   */
  function onDeleteTestCaseHandler(deleteTestCase) {
    const deletedTestCase = deleteTestCase.input + ":" + deleteTestCase.output;
    setTestCases((prevTest) => {
      return prevTest.filter((test) => test !== deletedTestCase);
    });
  }

  /**
   * @description - function to remove all testcases when remove all button is clicked
   */
  function onRemoveTestCasesHandler() {
    setTestCases([]);
    setDefaultReward(0);
  }

  /**
   *
   * @param {string} selectStartDate - start date of the question that should be passed to backend
   * @param {string} selectEndDate - end date of the question that should be passed to backend
   */
  function addDateTimeHandler(selectStartDate, selectEndDate) {
    setQuestionStartDate(selectStartDate);
    setQuestionEndDate(selectEndDate);
  }

  /**
   * @typedef {object} backEndCall
   * @property {string} questionText - question statement
   * @property {string} testCases - testcases related to question Text
   * @property {number} defaultReward - Total weightage assigned of the question Text
   */
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
