import MidBody from "./MidBody";
import { render, screen, getByRole, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Testing App", () => {
  test("render app", () => {
    render(<App></App>);
    screen.debug();
  });
});
