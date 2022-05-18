import MidBody from "./MidBody";
import { render, screen, getByRole, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe("Testing MidBody", () => {f
  test("render MidBody", () => {
    render(<MidBody></MidBody>);
    screen.debug();
  });

 
  // test("render if the text area are present in UI",()=>{
  //     render(<MidBody/>)
  //     const testMidBodyTextBoxes=screen.getByRole('textbox',{name:})
  //     expect(testMidBodyTextBoxes).toBeInTheDocument();
  // })

  // test("render if problem statement text box of type text present in the UI", () => {
  //   render(<ProblemStatement />);
  //   const testProblemStatement = screen.getByPlaceholderText(
  //     "Problem Statement here upto 500 characters *"
  //   );
  //   expect(testProblemStatement).toBeInTheDocument();
  //   expect(testProblemStatement).toHaveAttribute("type", "text");
  // });
});
