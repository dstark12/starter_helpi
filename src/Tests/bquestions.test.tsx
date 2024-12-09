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
  
    const title = screen.getByText("Basic Career Questions");
    expect(title).toBeInTheDocument();
  
    // Check for the first question
    const firstQuestion = screen.getByText(questions[0].questionText);
    expect(firstQuestion).toBeInTheDocument();
  
    // Check for the reset button
    const resetButton = screen.getByText("Reset Answers");
    expect(resetButton).toBeInTheDocument();
  
    // In the given component, the button text is "Next Page"
    const nextPageButton = screen.getByText("Next Page");
    expect(nextPageButton).toBeDisabled(); // There's a utility to check disabled state
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
  
    // Iterate through each question and check that its text is in the document
    questions.forEach((q) => {
      const questionElement = screen.getByText(q.questionText);
      expect(questionElement).toBeInTheDocument();
    });
  });

  test("handles button clicks to record answers", () => {
    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={{}}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    // Define sample answers for specific questions
    const sampleAnswers: { [key: number]: string } = {
      1: "Yes",
      2: "IDK",
      3: "No",
      4: "Yes",
      5: "No",
      6: "IDK",
      7: "Yes",
    };

    // Retrieve all "YES", "IDK", "NO" buttons
    const yesButtons = screen.getAllByText("YES");
    const idkButtons = screen.getAllByText("IDK");
    const noButtons = screen.getAllByText("NO");

    // Iterate through each question and simulate button clicks based on sampleAnswers
    questions.forEach((q, index) => {
      const answer = sampleAnswers[q.id];
      let buttonToClick: HTMLElement;

      if (answer === "Yes") {
        buttonToClick = yesButtons[index];
      } else if (answer === "IDK") {
        buttonToClick = idkButtons[index];
      } else if (answer === "No") {
        buttonToClick = noButtons[index];
      } else {
        throw new Error(`Unexpected answer "${answer}" for question ID ${q.id}`);
      }

      // Simulate clicking the answer button
      fireEvent.click(buttonToClick);

      // Verify that setGlobalAnswers is called with the correct values
      expect(mockSetGlobalAnswers).toHaveBeenCalledWith({ [q.id]: answer });
    });

    // Verify that setGlobalAnswers was called the correct number of times
    expect(mockSetGlobalAnswers).toHaveBeenCalledTimes(7);
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
    expect(progressBar.style.width).toBe("14.285714285714285%"); // Assuming 10% progress for 1 answered question
  });

  test("navigates to the detailed questions page", () => {
    // Provide a full set of answers for the basic questions
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

    // The "Next Page" button should now be enabled since all questions are answered
    const nextPageButton = screen.getByText("Next Page");
    expect(nextPageButton).not.toBeDisabled();

    // Simulate the click
    fireEvent.click(nextPageButton);

    // Verify that the page was set to "dquestions"
    expect(mockSetPage).toHaveBeenCalledWith("dquestions");

  });
});