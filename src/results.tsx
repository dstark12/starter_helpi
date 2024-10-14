import React from 'react';
import './results.css';

const Results = () => {
  // Define the career data
  const mainCareer = "Software Engineer";
  const alternativeCareers = ["Data Scientist", "Cybersecurity Analyst", "Web Developer"];
  const graphData = [
    { label: 'Software Engineer', score: 80 },
    { label: 'Data Scientist', score: 65 },
    { label: 'Cybersecurity Analyst', score: 50 }
  ];

  return (
    <div className="results-container">
      {/* Page header */}
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      {/* Main content */}
      <main className="main-content">
        {/* Career choice section */}
        <section className="career-section">
          <h2>Your Ideal Career: <span>{mainCareer}</span></h2>
          <p>Based on your quiz results, a <strong>{mainCareer}</strong> seems to be the best fit for you!</p>
        </section>

        {/* Graph section */}
        <section className="graph-section">
          <h3>Quiz Score Breakdown</h3>
          <div className="graph">
            {graphData.map((data, index) => (
              <div key={index} className="bar-container">
                <div
                  className="bar"
                  style={{ height: `${data.score}%` }}
                  title={`${data.label}: ${data.score}%`}
                >
                  <span className="bar-label">{data.score}%</span>
                </div>
                <p className="bar-title">{data.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alternative careers section */}
        <section className="alternatives-section">
          <h3>Alternative Career Options:</h3>
          <ul>
            {alternativeCareers.map((career, index) => (
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

export default Results;