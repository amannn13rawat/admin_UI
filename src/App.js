import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import { useState } from "react";


//object creation
//data passed to bottomBtn



function App() {
  const [problemStatement,setProblemStatement] = useState('');
  const [testCase,setTestCase] = useState([]);
  const [reward,setReward] = useState('');
  return (
    <>
      
      <Navbar></Navbar>
      <ProblemStatement giveProblemStatement={setProblemStatement}></ProblemStatement>
      <MidBody giveTestCase={setTestCase} giveReward={setReward}></MidBody>
      <BottomBtn></BottomBtn>
      <Footer></Footer>
     
    </>
  );
}

export default App;
