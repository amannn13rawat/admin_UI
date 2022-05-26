import SubmitPopup from "../SubmitPopup";
import {
  render,
  screen,
  getByRole,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("SubmitPopup Testing", () => {
  // test("render SubmitPopup", () => {
  //   render(<SubmitPopup></SubmitPopup>);
  //   screen.debug();
  // });

  test("render if Buttons present in UI", () => {
    render(<SubmitPopup />);
    const testSubmitButton = screen.getByRole("button", { name: "Submit" });
    expect(testSubmitButton).toBeInTheDocument();
    expect(testSubmitButton).toHaveAttribute("type", "submit");
    expect(testSubmitButton).toHaveStyle({ backgroundColor: "#00c853" });
    const testCancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    expect(testCancelButton).toBeInTheDocument();
    expect(testCancelButton).toHaveAttribute("type", "cancel");
    expect(testCancelButton).toHaveStyle({ backgroundColor: "#b71c1c" });
  });

  test("render if submit is clicked and Text Appears", () => {
    render(<SubmitPopup></SubmitPopup>);

    const testSubmitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(testSubmitButton);
    expect(
      screen.getByText("Successfully submitted the problem statement!")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /okay/i })).toBeInTheDocument();
  });
});
