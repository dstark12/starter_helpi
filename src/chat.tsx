// chat.tsx
// import axios from 'axios';

export const GetResponse = async (apikey: string, prompt: string, result: (arg0: string) => void) => {
  /*
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apikey}`,
  };
  const requestBody = {
    model: "gpt-4",
    messages: [{role: 'system', content: 'You are an agent that assists people with finding career suggestions. Respond in the exact format requested, without additional comments.'}, { role: 'user', content: prompt }],
  };

  try {
    const { data } = await axios.post(apiUrl, requestBody, { headers });
    const response = data.choices[0].message.content;
    const careers = response.split("|");
    result(careers.join("|")); // Join with `|` for separation
  } catch (error) {
    console.log("Error parsing GPT response:", error);
    result("Career 1: Software Engineer. You like money.|Career 2: Data Scientist. You really like money.|Career 3: Nvidia Software Engineer. You really, REALLY like money.");
  }
  */

  // Mock response for testing purposes
  result("Career 1: Software Engineer. You like money.|Career 2: Data Scientist. You really like money.|Career 3: Nvidia Software Engineer. You really, REALLY like money.");
};

export function utils_answers_to_list(dict: { [key: number]: string }): string[] {
  return Object.values(dict);
}

export function utils_questions_to_list(dict: { id: number, questionText: string }[]): string[] {
  return dict.map(q => q.questionText);
}
