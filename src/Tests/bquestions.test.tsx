import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Bquestions, questions } from '../Components/bquestions';

describe("Bquestions Component", () => {
  const mockSetPage = jest.fn();
  const mockSetQuestions = jest.fn();
  const mockSetGlobalAnswers = jest.fn();

  test("renders the component correctly", () => {
    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={{}}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    const title = screen.getByText("Detailed Business Questions");
    expect(title).toBeInTheDocument();

    // Check for the first question
    const firstQuestion = screen.getByText(questions[0].questionText);
    expect(firstQuestion).toBeInTheDocument();

    // Check for the reset button
    const resetButton = screen.getByText("Reset Answers");
    expect(resetButton).toBeInTheDocument();

    // Check that the "Next Page" button is disabled (by checking `disabled` attribute)
    const nextPageButton = screen.getByText("Go To Next Page");
    expect(nextPageButton).toHaveAttribute("disabled");
  });

  test("renders all questions", () => {
    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={{}}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    questions.forEach((q) => {
      const questionElement = screen.getByText(q.questionText);
      expect(questionElement).toBeInTheDocument();
    });
  });

  test("handles input changes", () => {
    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={{}}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    const inputFields = screen.getAllByPlaceholderText("Enter your answer here");
    const sampleAnswer = "I prefer working in fast-paced environments.";

    // Simulate typing into the first input field
    const input = inputFields[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: sampleAnswer } });

    // Ensure `setGlobalAnswers` is called with the correct values
    expect(mockSetGlobalAnswers).toHaveBeenCalledWith({ 1: sampleAnswer });
  });

  test("displays progress bar correctly", () => {
    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={{ 1: "Answer 1" }}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar.style.width).toBe("10%"); // Assuming 10% progress for 1 answered question
  });

  test("navigates to the next page", () => {
    const allAnswers = questions.reduce<Record<number, string>>((acc, q) => {
      acc[q.id] = "Sample answer";
      return acc;
    }, {});

    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={allAnswers}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    const nextPageButton = screen.getByText("Go To Next Page");
    expect(nextPageButton).not.toHaveAttribute("disabled");

    // Simulate button click
    fireEvent.click(nextPageButton);

    // Ensure correct navigation and state updates
    expect(mockSetPage).toHaveBeenCalledWith("bquestions2");
    expect(mockSetQuestions).toHaveBeenCalledWith(questions);
  });
});