// chat.tsx
// import axios from 'axios';

export const GetResponse = async (apikey: string, prompt: string, result: (careers: string, aboutYou: string) => void) => {
  /*
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apikey}`,
  };
  const requestBody = {
    model: "gpt-4",
    messages: [
      { role: 'system', content: 'You are an agent that assists people with finding career suggestions. Respond in the exact format requested, without additional comments.' },
      { role: 'user', content: prompt }
    ],
  };

  try {
    const { data } = await axios.post(apiUrl, requestBody, { headers });
    const response = data.choices[0].message.content;
    const sections = response.split("|");
    const careers = sections.slice(0, 3).join("|"); // First three sections for careers
    const aboutYou = sections[3] || "About You: Passionate about growth and enjoys working on impactful projects."; // Separate about you section
    result(careers, aboutYou);
  } catch (error) {
    console.log("Error parsing GPT response:", error);
    result(
      "Career 1: Software Engineer. You like money.|Career 2: Data Scientist. You really like money.|Career 3: Nvidia Software Engineer. You really, REALLY like money.",
      "About You: Analytical and driven by problem-solving. Interested in tech and data, with a knack for impactful work."
    );
  }
  */

  // Mock response for testing purposes
  result(
    "Career 1: Software Engineer. You like money.|Career 2: Data Scientist. You really like money.|Career 3: Nvidia Software Engineer. You really, REALLY like money.",
    "About You: This is an example about you section It should be about this length long for formatting purposes - We found that you are Analytical and driven by problem-solving. Blah Blah Blah Blah Blahhhhhh Interested in tech and data, with a knack for impactful work."
  );
};

// Utilities to format questions and answers
export function utils_answers_to_list(dict: { [key: number]: string }): string[] {
  return Object.values(dict);
}

export function utils_questions_to_list(dict: { id: number, questionText: string }[]): string[] {
  return dict.map(q => q.questionText);
}
