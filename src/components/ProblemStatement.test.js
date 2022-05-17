import ProblemStatement from "./ProblemStatement";
import {
  render,
  screen,
  getByRole,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";


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

    test("pass the valid input data", async() => {
        render(<ProblemStatement />);
        const testProblemStatement = screen.getByRole("textbox");
        userEvent.type(testProblemStatement, "Write the problem statement here");
        await waitFor(() => {
          expect(testProblemStatement).toHaveValue(
            "Write the problem statement here"
          );
        });
    });
});

