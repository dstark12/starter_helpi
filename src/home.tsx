import React from 'react';
import { Button } from "react-bootstrap";
import './home.css'; // Import your CSS file

export function Home({ setPage }: { setPage: (page: string) => void }): React.JSX.Element {
    return (
        <div className="container">
            <header>
                <h1>Super Fun Career Quiz</h1>
                <div className="button-container">
                    <div className="left-button">
                        <Button 
                            onClick={() => setPage("bquestions")}
                            aria-label="Start Basic Questions Quiz"
                        >
                            Basic Questions
                        </Button>
                        <p>A quiz that gives the user questions with multiple choice response for a quicker, less accurate experience</p>
                    </div>
                    <div className="right-button">
                        <Button 
                            onClick={() => setPage("dquestions")}
                            aria-label="Start Detailed Questions Quiz"
                        >
                            Detailed Questions
                        </Button>
                        <p>A quiz that gives the user questions they can answer with open-ended responses for a longer, accurate experience</p>
                    </div>
                </div>
            </header>
        </div>
    );
}
