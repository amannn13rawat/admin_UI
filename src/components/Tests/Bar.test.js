import Footer from "../Bars/Footer";
import Navbar from "../Bars/Navbar";
import { render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Testing Bars Component", () => {
  test("renders Credit as a text", () => {
    render(<Footer />);
    expect(screen.getByText("Credit.com")).toBeInTheDocument();
  });

  test("renders BFB as a text", () => {
    render(<Navbar />);

    expect(
      screen.getByText("Breakfast for Brains-Coding Challange!")
    ).toBeInTheDocument();
  });

  test("renders User as a text", () => {
    render(<Navbar />);
    expect(screen.getByText("User")).toBeInTheDocument();
  });
});
