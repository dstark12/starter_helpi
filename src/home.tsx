import React, { useState } from 'react';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';
import { Button } from "react-bootstrap";


export function Home(): React.JSX.Element {
    const [page, setPage] = useState<string>("home");

    return (
        <div>
            <header>
                <h1>Super Fun Career Quiz</h1>
                <div>
                <Button onClick={()=>{setPage("bquestions")}}>Basic Questions</Button>
                <Button onClick={()=>{setPage("dquestions")}}>Detailed Questions</Button>
                </div>
                {page === "home"? <Home/> : null}
         {page === "bquestions"? <Bquestions/>: null}
        {page === "dquestions"? <Dquestions/>: null}
            </header>
        </div>
    );
};
