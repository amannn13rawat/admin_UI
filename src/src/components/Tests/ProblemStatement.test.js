import ProblemStatement from "../ProblemStatement";
import { render, screen, getByRole, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Testing Problem Statement", () => {
  // test("render problem statement", () => {
  //   render(<ProblemStatement></ProblemStatement>);
  //   screen.debug();
  // });

  test("render if problem statement text box of type text present in the UI", () => {
    render(<ProblemStatement />);
    const testProblemStatement = screen.getByPlaceholderText(
      "Problem Statement here *"
    );
    expect(testProblemStatement).toBeInTheDocument();
    expect(testProblemStatement).toHaveAttribute("type", "text");
  });

  test("pass valid input data", async () => {
    const onSaveProblemStatement = jest.fn();
    render(
      <ProblemStatement onSaveProblemStatement={onSaveProblemStatement} />
    );
    const user = userEvent.setup();

    const testProblemStatement = screen.queryByRole("textbox");

    await user.type(screen.getByRole("textbox"), "Aman");

    expect(testProblemStatement).not.toBeNull();
    await waitFor(() => {
      expect(screen.getByRole("textbox")).toHaveValue("Aman");
    });
  });
});
