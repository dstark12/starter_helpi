import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import { Dquestions, detailedQuestions } from "../Components/dquestions";
import { Dquestions2, detailedQuestions2 } from "../Components/dquestions2";


//For 'dquestions' component
describe("Dquestions Component", () => {
  const mockSetPage = jest.fn();
  const mockSetQuestions = jest.fn();
  const mockSetGlobalAnswers = jest.fn();

  test("renders the component correctly", () => {
    render(
        <Dquestions
          page="dquestions1"
          setPage={mockSetPage}
          setQuestions={mockSetQuestions}
          GlobalAnswers={{}}
          setGlobalAnswers={mockSetGlobalAnswers}
        />
      );
    
      // Match the question text with a regex
      const firstQuestion = screen.getByText(/Do you prefer managing projects where you have full control, or do you thrive in collaborative environments\?/i);
      expect(firstQuestion).toBeInTheDocument();
    });

    test("handles input changes", () => {
        render(
          <Dquestions
            page="dquestions1"
            setPage={mockSetPage}
            setQuestions={mockSetQuestions}
            GlobalAnswers={{}}
            setGlobalAnswers={mockSetGlobalAnswers}
          />
        );
    
        const inputFields = screen.getAllByPlaceholderText("Enter your answer here");
        const sampleAnswer = "I prefer collaborative environments.";
    
        // Simulate a user typing into the first input field
        fireEvent.change(inputFields[0], { target: { value: sampleAnswer } });
    
        // Verify that setGlobalAnswers was called with the updated state
        expect(mockSetGlobalAnswers).toHaveBeenCalledWith({ 1: sampleAnswer });
      });

  test("displays progress bar correctly", () => {
    render(
      <Dquestions
        page="dquestions1"
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
    const allAnswers = detailedQuestions.reduce<Record<number, string>>((acc, q) => {
        acc[q.id] = "Sample answer";
        return acc;
      }, {});
      

    render(
      <Dquestions
        page="dquestions1"
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={allAnswers}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    const nextPageButton = screen.getByText("Go To Next Page");
    expect(nextPageButton).not.toHaveAttribute("disabled");

    // Simulate button click
    nextPageButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    // Ensure correct navigation and state updates
    expect(mockSetPage).toHaveBeenCalledWith("dquestions2");
    expect(mockSetQuestions).toHaveBeenCalledWith(detailedQuestions);
  });
});

//
describe("Dquestions2 Component", () => {
    const mockSetPage = jest.fn();
    const mockSetQuestions = jest.fn();
    const mockSetGlobalAnswers = jest.fn();
  
    // Mock answers
    const mockGlobalAnswers = {
      11: "Sample answer 1",
      12: "Sample answer 2",
      13: "Sample answer 3",
      14: "Sample answer 4",
      15: "Sample answer 5",
      16: "Sample answer 6",
      17: "Sample answer 7",
      18: "Sample answer 8",
      19: "Sample answer 9",
      20: "Sample answer 10",
    };
  
    test("renders all questions from the second page", () => {
        render(
          <Dquestions2
            page="dquestions2"
            setPage={mockSetPage}
            setQuestions={mockSetQuestions}
            GlobalAnswers={mockGlobalAnswers}
            setGlobalAnswers={mockSetGlobalAnswers}
          />
        );
      
        detailedQuestions2.forEach((q) => {
          // Use a function matcher to find the text inside the rendered <p>
          const questionElement = screen.getByText((content) => content.includes(q.questionText));
          expect(questionElement).toBeInTheDocument();
        });
      });
  
    test("displays the progress bar", () => {
      render(
        <Dquestions2
          page="dquestions2"
          setPage={mockSetPage}
          setQuestions={mockSetQuestions}
          GlobalAnswers={mockGlobalAnswers}
          setGlobalAnswers={mockSetGlobalAnswers}
        />
      );
  
      // Verify if progress bar is rendered
      const progressBar = screen.getByRole("progressbar");
      expect(progressBar).toBeInTheDocument();
    });
  
    test("shows 'See Results' button as disabled if not all questions are answered", () => {
      render(
        <Dquestions2
          page="dquestions2"
          setPage={mockSetPage}
          setQuestions={mockSetQuestions}
          GlobalAnswers={{}}  // No answers are provided
          setGlobalAnswers={mockSetGlobalAnswers}
        />
      );
  
      const resultsButton = screen.getByText("See Results");
      expect(resultsButton).toBeDisabled();
    });
  
    test("shows 'See Results' button as enabled if all questions are answered", () => {
      render(
        <Dquestions2
          page="dquestions2"
          setPage={mockSetPage}
          setQuestions={mockSetQuestions}
          GlobalAnswers={mockGlobalAnswers}  // All answers are provided
          setGlobalAnswers={mockSetGlobalAnswers}
        />
      );
  
      const resultsButton = screen.getByText("See Results");
      expect(resultsButton).toBeEnabled();
    });
  
    test("renders 'Previous Page' button", () => {
      render(
        <Dquestions2
          page="dquestions2"
          setPage={mockSetPage}
          setQuestions={mockSetQuestions}
          GlobalAnswers={mockGlobalAnswers}
          setGlobalAnswers={mockSetGlobalAnswers}
        />
      );
  
      // Check if "Previous Page" button is rendered
      const previousButton = screen.getByText("Previous Page");
      expect(previousButton).toBeInTheDocument();
    });
  });

  //Chat gpt was used thoroughly throughout these tests, responsible for each render statement