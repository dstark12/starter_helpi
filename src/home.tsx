import React, { useState } from 'react';
// import { Bquestions } from './bquestions';
// import { Dquestions } from './dquestions';
import { Button } from "react-bootstrap";


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
    const [page, setPage] = useState<string>("home");

    return (
        <div>
            <header>
                <h1>Super Fun Career Quiz</h1>
                <div>
                <Button onClick={()=>{setPage("bquestions")}}>Basic Questions</Button>
                <Button onClick={()=>{setPage("dquestions")}}>Detailed Questions</Button>
                </div>
            </header>
        </div>
    );
};
