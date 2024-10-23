import React from 'react';
import './results.css';

export function Results({bq, ba, dq, da, dq2, da2}: 
  {bq: {id: number, questionText: string}[], ba: {[key: number]: string}, dq: {id: number, questionText: string}[], da: {[key: number]: string}, dq2: {id: number, questionText: string}[], da2: {[key: number]: string}}): React.JSX.Element {
  // Example career data
  const mainCareer = "Software Engineer";
  //const alternativeCareers = ["Data Scientist", "Cybersecurity Analyst", "Web Developer"];
  const otherCareers = ["Database Architect", "Mobile App Developer", "Information Security Analyst"];
  const graphData = [
    { label: 'Software Engineer', score: 80, questions: 7 }, // 7 questions aligned with Software Engineer
    { label: 'Data Scientist', score: 65, questions: 5 },    // 5 questions aligned with Data Scientist
    { label: 'Cybersecurity Analyst', score: 50, questions: 4 } // 4 questions aligned with Cybersecurity Analyst
  ];

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      <main className="main-content">
        {/* Main Career Section */}
        
        <section className="career-section">
          <h2>Your Ideal Career: <span>{mainCareer}</span></h2>
          <p>Based on your quiz results, a <strong>{mainCareer}</strong> seems to be the best fit for you!</p>
        </section>

        {/* Detailed Graphs for Each Career */}
        <section className="detailed-graphs-section">
          <h3>Top 3 Careers And Why: </h3>
          {graphData.map((data, index) => (
            <div key={index} className="career-detail">
              <p>{data.questions} of your answers indicated interest in {data.label}.</p>
              <div className="detail-graph">
                <div
                  className="detail-bar"
                  style={{ width: `${data.questions * 15}%` }} // Adjust bar width to better visualize number of questions
                >
                  <span className="detail-bar-label">{data.questions} questions</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* other Careers Section */}
        <section className="alternatives-section">
          <h3>Even More Career Options:</h3>
          <ul>
            {otherCareers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Career Quiz © 2024</p>
      </footer>
    </div>
  );
};

// Add default export
export default Results;
