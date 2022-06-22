/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unused-imports/no-unused-imports */

import * as ReactRedux from "react-redux";

import { Item } from "@/components";
import { Todo } from "@/shared/interfaces/Todo";
import { fireEvent, screen } from "@testing-library/react";

import { customRender } from "../utils/CustomRender";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockedSelectorTodos = jest.spyOn(
  require("../../hooks/useSelectorTodos"),
  "useSelectorTodos"
);

const initialState = {
  todos: [
    {
      id: 0,
      value: "test",
      isCompleted: false,
    },
  ],
};

describe("Item", () => {
  let mockArray: Todo[] = [];
  const useDispatchMock = ReactRedux.useDispatch;

  beforeEach(() => {
    mockedSelectorTodos.mockImplementation(() => {
      return mockArray;
    });
  });

  afterEach(() => {
    mockArray = [];
    mockedSelectorTodos.mockClear();
    (useDispatchMock as jest.Mock).mockClear();
  });

  it("should render correctly", () => {
    customRender(<Item id={0} text="Test Task" />);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("should be able to change Todo to completed", () => {
    (useDispatchMock as jest.Mock).mockImplementation(() => {
      mockArray.push({
        id: 1,
        isCompleted: true,
        value: "Test Task Snap",
      });
    });

    customRender(<Item id={1} text="Test Task Snap" />, initialState);

    const todoCheckBox = screen.getByTestId(
      "checkboxItemTest"
    ) as HTMLInputElement;

    fireEvent.change(todoCheckBox, { target: { checked: true } });

    expect(useDispatchMock).toHaveBeenCalled();
    expect(todoCheckBox.checked).toBe(true);
    expect(screen.getByText("Test Task Snap")).toHaveClass("line-through");
    expect(screen.getByText("Test Task Snap")).toHaveClass("text-gray-300");
  });

  it("match snapshot", () => {
    (useDispatchMock as jest.Mock).mockImplementation(() => {
      mockArray.push({
        id: 1,
        isCompleted: false,
        value: "Test Task Snap",
      });
    });

    customRender(<Item id={1} text="Test Task Snap" />);

    expect(screen.getByText("Test Task Snap")).toMatchSnapshot();
  });
});
