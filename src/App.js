import Footer from "./components/Bars/Footer";
import BottomBtn from "./components/BottomBtn";
import Navbar from "./components/Bars/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import MidBody from "./components/MidBody";
import AddPopup from "./components/AddPopup";



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProblemStatement></ProblemStatement>
      <MidBody></MidBody>
      <BottomBtn></BottomBtn>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
