import React from 'react';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';

export function Home(): React.JSX.Element {
    // Function to handle button clicks
    const handleBQuestions = () => {
        // Logic for handling Bquestions, e.g., navigating to the component or displaying it
        console.log("Bquestions clicked");
        // You might want to set state here or navigate to another page.
    };

    const handleDQuestions = () => {
        // Logic for handling Dquestions
        console.log("Dquestions clicked");
        // Similar logic as above.
    };

    return (
        <div>
            <header>
                <h1>Super Fun Career Quiz</h1>
                <div>
                    <button onClick={handleBQuestions}>
                        Go to B Questions
                    </button>
                    <button onClick={handleDQuestions}>
                        Go to D Questions
                    </button>
                </div>
            </header>
        </div>
    );
};
