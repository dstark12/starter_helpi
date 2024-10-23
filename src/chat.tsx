import React, { useState } from 'react';
import axios from 'axios';

const Chat = ({userapiKey}: {userapiKey: string}): React.JSX.Element => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
  
    const sendMessage = async () => {
      try {
        const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Update with the correct API endpoint
        const apiKey = userapiKey; // Replace with your actual API key
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        };
  
        const requestBody = {
          model: "gpt-3.5-turbo",
          messages: [{ role: 'user', content: input }],
        };

        setResponse("Pending response...");
  
        const { data } = await axios.post(apiUrl, requestBody, { headers });
  
        setResponse(data.choices[0].message.content);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };
  
    return (
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        <div>
          <p>{response}</p>
        </div>
      </div>
    );
  };

  export const GetResponse = async (apikey: string, prompt: string) => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apikey}`,
    };
    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: 'user', content: prompt }],
    };

    const { data } = await axios.post(apiUrl, requestBody, { headers });
    return data.choices[0].message.content;

  }

  export function utils_answers_to_list(dict: {[key:number]:string}): string[]{
    return Object.values(dict);
  }

  export function utils_questions_to_list(dict: {id: number, questionText: string}[]): string[]{
    let vals: string[] = [];
    for(let i of dict){
      vals = [...vals, i.questionText];
    }
    return vals;
  }
  
export default Chat;