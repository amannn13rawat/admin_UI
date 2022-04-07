import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <p>Space between</p> */}
      <ProblemStatement></ProblemStatement>
      <MidBody></MidBody>
      <BottomBtn></BottomBtn>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
