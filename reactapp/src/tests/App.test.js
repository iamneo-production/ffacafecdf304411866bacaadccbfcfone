import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";

test("submitting_empty_fields", () => {
  render(<CreateArea />);
  
  fireEvent.click(screen.getByText("Add"));
  
  const popupElement = screen.getByText("Please enter both a title and content before adding a note.");
  expect(popupElement).toBeInTheDocument();
});

test("submitting_non-empty_fields", () => {
  const mockOnAdd = jest.fn();
  render(<CreateArea onAdd={mockOnAdd} />);
  
  fireEvent.change(screen.getByPlaceholderText("Task..."), { target: { value: "Test Title" } });
  fireEvent.change(screen.getByPlaceholderText("Steps to be done ..."), { target: { value: "Test Content" } });
  fireEvent.click(screen.getByText("Add"));
  
  expect(mockOnAdd).toHaveBeenCalledWith(expect.objectContaining({
    title: "Test Title",
    content: "Test Content"
  }));
});

// You can add more test cases for handleChange and other functionalities if needed
test("renders_note_correctly", () => {
    const mockOnDelete = jest.fn();
    render(<Note id="1" title="Test Title" content="Test Content" onDelete={mockOnDelete} />);
    
    const titleElement = screen.getByText("Test Title");
    const contentElement = screen.getByText("Test Content");
    
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
  
  test("onDelete_prop", () => {
    const mockOnDelete = jest.fn();
    render(<Note id="1" title="Test Title" content="Test Content" onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByText("DELETE");
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });
  