import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test get by text
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test get by List item <li>
test("renders 3 list items", () => {
  render(<App />);
  const listitems = screen.getAllByRole("listitem");
  expect(listitems.length).toEqual(3);
});

// test get by id =""
test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});

// test by title=""
test("sum should be 6", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("15");
});
