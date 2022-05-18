import ProblemStatement from "./ProblemStatement";
import { render, screen, getByRole, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { ShallowRenderer } from "react-dom/test-utils";
// import MidBody from "./MidBody";

describe("Testing Problem Statement", () => {
  test("render problem statement", () => {
    render(<ProblemStatement></ProblemStatement>);
    screen.debug();
  });

  test("render if problem statement text box of type text present in the UI", () => {
    render(<ProblemStatement />);
    const testProblemStatement = screen.getByPlaceholderText(
      "Problem Statement here upto 500 characters *"
    );
    expect(testProblemStatement).toBeInTheDocument();
    expect(testProblemStatement).toHaveAttribute("type", "text");
  });

  // test("pass the valid input data", async () => {
  //   render(<ProblemStatement />);
  //   const testProblemStatement = screen.getByRole("textbox");
  //   userEvent.type(testProblemStatement, "H");
  //   await waitFor(() => {
  //     expect(testProblemStatement).toHaveValue("H");
  //   });
  // });
});

// test("problem", () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<ProblemStatement />);
//   const testProblemStatement = renderer.getByRole("textbox");
//   userEvent.type(testProblemStatement, "aman");

//   expect(renderer.getByRole("textbox")).toHaveValue("aman");
// });

// test('pass valid email to test email input field', () => {
//   render(<App />);

//   const inputEl = screen.getByTestId("email-input");
//   userEvent.type(inputEl, "test@mail.com");

//   expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
//   expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
// });

// test('midbody',()=>{
//   render(<MidBody/>)
//   screen.debug();
// })
