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
  
  export default Chat;