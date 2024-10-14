import React, { useState } from 'react';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';


export function Home() : React.JSX.Element {
    return <div>
        <header>
            <button
            onClick={Bquestions}>
            </button>
            <button
            onClick={Dquestions}>
            </button>
        </header>
        <header>
            Super Fun Career Quiz
        </header>
    </div>
};

