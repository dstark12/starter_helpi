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
  
    const firstQuestion = screen.getByText(questions[0].questionText);
    expect(firstQuestion).toBeInTheDocument();
  
    const resetButton = screen.getByText("Reset Answers");
    expect(resetButton).toBeInTheDocument();
  
    const nextPageButton = screen.getByText("Next Page");
    expect(nextPageButton).toBeDisabled();
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

  test("handles button clicks to record answers", () => {
    render(
      <Bquestions
        setPage={mockSetPage}
        setQuestions={mockSetQuestions}
        GlobalAnswers={{}}
        setGlobalAnswers={mockSetGlobalAnswers}
      />
    );

    const sampleAnswers: { [key: number]: string } = {
      1: "Yes",
      2: "IDK",
      3: "No",
      4: "Yes",
      5: "No",
      6: "IDK",
      7: "Yes",
    };

    const yesButtons = screen.getAllByText("YES");
    const idkButtons = screen.getAllByText("IDK");
    const noButtons = screen.getAllByText("NO");

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

      fireEvent.click(buttonToClick);

      expect(mockSetGlobalAnswers).toHaveBeenCalledWith({ [q.id]: answer });
    });


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
    expect(progressBar.style.width).toBe("14.285714285714285%"); 
  });

  test("navigates to the detailed questions page", () => {
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

    const nextPageButton = screen.getByText("Next Page");
    expect(nextPageButton).not.toBeDisabled();

    fireEvent.click(nextPageButton);


    expect(mockSetPage).toHaveBeenCalledWith("dquestions");

  });
});