import BottomBtn from "./BottomBtn";
import { render, screen, getByRole, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Testing Bottom Button", () => {
  test("render bottom btn", () => {
    render(<BottomBtn />);
    screen.debug();
  });

  test("render if submit and clear button is present in UI", () => {
    render(<BottomBtn />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
  });
});

