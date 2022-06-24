/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unused-imports/no-unused-imports */

import { act } from "react-dom/test-utils";

import { Item } from "@/components";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithRedux } from "../utils/CustomRender";

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// const mockedSelectorTodos = jest.spyOn(
//   require("../../hooks/useSelectorTodos"),
//   "useSelectorTodos"
// );

const initialState = {
  todos: [
    {
      id: 1,
      value: "Test Task",
      isCompleted: false,
    },
  ],
};

function render() {
  const { mockStore, rerenderWithRedux } = renderWithRedux(
    <Item id={1} text="Test Task" />,
    initialState
  );

  return { mockStore, rerenderWithRedux };
}

describe("Item", () => {
  it("should render correctly", () => {
    render();

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("should be able to change Todo to completed", async () => {
    act(() => {
      render();
    });

    const todoCheckBox = screen.getByTestId(
      "checkboxItemTest"
    ) as HTMLInputElement;

    fireEvent.click(todoCheckBox);

    expect(screen.getByText("Test Task")).toHaveClass("line-through");

    expect(screen.getByText("Test Task")).toHaveClass("text-gray-300");
  });

  it("should be able to delete Todo", async () => {
    act(() => {
      render();
    });

    const deleteBtn = screen.getByTestId("deleteItemTest") as HTMLInputElement;

    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
  });

  it("match snapshot", () => {
    render();
    expect(screen.getByText("Test Task")).toMatchSnapshot();
  });
});
