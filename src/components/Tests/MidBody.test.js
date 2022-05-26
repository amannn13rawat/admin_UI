import MidBody from "../MidBody";
import Popup from "../Popup";
import DateSet from "../DateSet";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Testing MidBody", () => {

  test("render if the Input,Output and Weightage text area are present in UI", () => {
    const saveTestCase = jest.fn();
    const saveWeightage = jest.fn();
    render(
      <MidBody saveTestCase={saveTestCase} saveWeightage={saveWeightage} />
    );
    const testMidBodyInputText =
      screen.getByPlaceholderText("TestCases Input *");

    const testMidBodyOutputText =
      screen.getByPlaceholderText("Expected Output");

    const testMidBodyWeightageText = screen.getByPlaceholderText("Weightage");

    expect(testMidBodyInputText).toBeInTheDocument();
    expect(testMidBodyInputText).toHaveAttribute("type", "text");

    expect(testMidBodyOutputText).toBeInTheDocument();
    expect(testMidBodyOutputText).toHaveAttribute("type", "text");

    expect(testMidBodyWeightageText).toBeInTheDocument();
    expect(testMidBodyWeightageText).toHaveAttribute("type", "text");
  });

  test("render if Add and Remove button present in UI", () => {
    render(<MidBody />);
    const testMidBodyAddButton = screen.getByRole("button", { name: "Add" });
    expect(testMidBodyAddButton).toBeInTheDocument();
    expect(testMidBodyAddButton).toHaveAttribute("type", "Add");
    expect(testMidBodyAddButton).toHaveStyle({ backgroundColor: "#00c853" });
    const testMidBodyRemoveButton = screen.getByRole("button", {
      name: "Remove",
    });
    expect(testMidBodyRemoveButton).toBeInTheDocument();
    expect(testMidBodyRemoveButton).toHaveAttribute("type", "Remove");
    expect(testMidBodyRemoveButton).toHaveStyle({ backgroundColor: "#b71c1c" });
  });

  test("render if the table is present in UI", () => {
    render(<MidBody></MidBody>);
    expect(screen.getAllByRole("row")).toHaveLength(1);
    expect(screen.getByText(/input/i)).toBeInTheDocument();
    expect(screen.getByText(/output/i)).toBeInTheDocument();
    expect(screen.getByText(/weightage/i)).toBeInTheDocument();
  });

  test("TextArea testing , renders if data is correct in textArea ", async () => {
    render(<MidBody></MidBody>);

    const inputTextArea = screen.getByPlaceholderText(/TestCases Input*/i);
    const outputTextArea = screen.getByPlaceholderText(/Expected Output/i);
    const weightageElement = screen.getByPlaceholderText(/Weightage/i);

    await userEvent.type(inputTextArea, "10 and 20");
    await waitFor(() => {
      expect(inputTextArea).toHaveValue("10 and 20");
    });

    await userEvent.type(outputTextArea, "Sum:30");
    await waitFor(() => {
      expect(outputTextArea).toHaveValue("Sum:30");
    });

    await userEvent.type(weightageElement, "100");
    await waitFor(() => {
      expect(weightageElement).toHaveValue("100");
    });
  });

  test("When click on remove remove text should be in document", () => {
    render(<MidBody></MidBody>);
    const removeButton = screen.getByRole("button", { name: /remove/i });

    fireEvent.click(removeButton);
    expect(
      screen.getByText("Test cases removed successfully!")
    ).toBeInTheDocument();

    fireEvent.click(removeButton);
  });
});

describe("Popup Testing", () => {
  test("Add Popup appears when clicked on the Add button", () => {
    const onCallPopup = jest.fn();
    render(
      <Popup
        color="#00c853"
        text="Test cases added successfulwly!"
        onCallPopup={onCallPopup}
      />
    );

    userEvent.click(screen.queryByText("Add"));

    expect(
      screen.getByText("Test cases added successfulwly!")
    ).toBeInTheDocument();
  });

  test("Remove Popup appears when clicked on the Remove button", () => {
    const onCallPopup = jest.fn();
    render(
      <Popup
        color="#b71c1c"
        text="Test cases removed successfully!"
        onCallPopup={onCallPopup}
      />
    );

    userEvent.click(screen.queryByText("Remove"));

    expect(
      screen.getByText("Test cases removed successfully!")
    ).toBeInTheDocument();
  });
});

describe("DatePicker Testing", () => {
  test("render when Date picker is present in UI", () => {
    const saveDateTime = jest.fn();
    render(<DateSet saveDateTime={saveDateTime} />);

    const startDate = screen.getByPlaceholderText("Start Date and Time");
    const endDate = screen.getByPlaceholderText("End Date and Time *");

    expect(startDate).toBeInTheDocument();
    expect(endDate).toBeInTheDocument();
  });

  test("render when Start date is selected", () => {
    const saveDateTime = jest.fn();
    render(<DateSet saveDateTime={saveDateTime} />);

    const startDate = screen.getByPlaceholderText("Start Date and Time");

    fireEvent.change(startDate, { target: { value: "2022-05-24 04:00" } });
    expect(startDate).toHaveValue("2022-05-24 04:00");
  });

  test("render when End date is selected", () => {
    const saveDateTime = jest.fn();
    render(<DateSet saveDateTime={saveDateTime} />);

    const endDate = screen.getByPlaceholderText("End Date and Time *");

    fireEvent.change(endDate, { target: { value: "2022-05-26 07:00" } });
    expect(endDate).toHaveValue("2022-05-26 07:00");
  });
});
